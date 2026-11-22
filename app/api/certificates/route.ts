// import { NextRequest, NextResponse } from "next/server";
// import { ObjectId } from "mongodb";
// import type { Document, Filter } from "mongodb";
// import clientPromise from "@/lib/mongodb";
// import { clean, serialize, FIELDS, FIELD_LABELS } from "@/lib/certificates";

// export const dynamic = "force-dynamic";

// type EditLogEntry = {
//   editedAt: string;
//   changes: { field: string; from: string; to: string }[];
// };

// const getCol = async () =>
//   (await clientPromise).db(process.env.MONGODB_DB || "hyi").collection("certificates");

// const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// const errMsg = (e: unknown) => (e instanceof Error ? e.message : "Server error");

// /* ---------------- GET: list + stats + next number ---------------- */
// export async function GET(req: NextRequest) {
//   try {
//     const col = await getCol();
//     const { searchParams } = new URL(req.url);
//     const cls = searchParams.get("class");
//     const q = searchParams.get("q")?.trim();

//     const filter: Filter<Document> = {};
//     if (cls && cls !== "all") filter.studentClass = cls;
//     if (q) {
//       const rx = new RegExp(esc(q), "i");
//       filter.$or = [{ studentName: rx }, { fatherName: rx }, { certificateId: rx }];
//     }

//     const items = await col.find(filter).sort({ createdAt: -1 }).toArray();
//     const total = await col.countDocuments();
//     const edited = await col.countDocuments({ editCount: { $gt: 0 } });
//     const grouped = await col
//       .aggregate([{ $group: { _id: "$studentClass", count: { $sum: 1 } } }])
//       .toArray();

//     const byClass: Record<string, number> = {};
//     grouped.forEach((g) => (byClass[g._id] = g.count));

//     // agla certificate number: us saal ka sabse chhota khali number (database se)
//     const year = new Date().getFullYear();
//     const rows = await col
//       .find({ certificateId: { $regex: `^HYI/TRM/${year}/\\d+$` } }, { projection: { certificateId: 1 } })
//       .toArray();
//     const usedSeq = rows
//       .map((d) => parseInt(String(d.certificateId).split("/").pop() || "0", 10))
//       .filter((n) => n > 0);
//     const usedSet = new Set(usedSeq);
//     let n = 1;
//     while (usedSet.has(n)) n++;
//     const nextId = `HYI/TRM/${year}/${String(n).padStart(2, "0")}`;

//     return NextResponse.json({
//       items: items.map(serialize),
//       stats: { total, edited, byClass, nextId, usedSeq },
//     });
//   } catch (e) {
//     console.error("GET /api/certificates", e);
//     return NextResponse.json({ error: errMsg(e) }, { status: 500 });
//   }
// }

// /* ---------------- POST: create ---------------- */
// export async function POST(req: NextRequest) {
//   try {
//     const col = await getCol();
//     const body = await req.json();
//     const { data, error } = clean(body);
//     if (error) return NextResponse.json({ error }, { status: 400 });

//     if (await col.findOne({ certificateId: data.certificateId })) {
//       return NextResponse.json({ error: "This certificate number has already been used." }, { status: 409 });
//     }

//     // same name + father + class wala student pehle se hai? -> warning (har record alag _id, data mix nahi hota)
//     if (!body.force) {
//       const dup = await col.findOne({
//         studentName: { $regex: `^${esc(data.studentName)}$`, $options: "i" },
//         fatherName: { $regex: `^${esc(data.fatherName)}$`, $options: "i" },
//         studentClass: data.studentClass,
//       });
//       if (dup) {
//         return NextResponse.json(
//           { error: "A certificate already exists for this name, father’s name, and class.", code: "DUPLICATE_STUDENT" },
//           { status: 409 }
//         );
//       }
//     }

//     const now = new Date().toISOString();
//     const doc = { ...data, createdAt: now, updatedAt: now, editCount: 0, editLog: [] as EditLogEntry[] };
//     const res = await col.insertOne(doc);
//     return NextResponse.json({ item: serialize({ ...doc, _id: res.insertedId }) }, { status: 201 });
//   } catch (e) {
//     console.error("POST /api/certificates", e);
//     return NextResponse.json({ error: errMsg(e) }, { status: 500 });
//   }
// }

// /* ---------------- PUT: edit (?id=...) ---------------- */
// export async function PUT(req: NextRequest) {
//   try {
//     const id = new URL(req.url).searchParams.get("id") || "";
//     if (!ObjectId.isValid(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

//     const col = await getCol();
//     const existing = await col.findOne({ _id: new ObjectId(id) });
//     if (!existing) {
//       return NextResponse.json(
//         { error: "Certificate not found. It may have been deleted or is no longer available.)", code: "NOT_FOUND" },
//         { status: 404 }
//       );
//     }

//     const { data, error } = clean(await req.json());
//     if (error) return NextResponse.json({ error }, { status: 400 });

//     if (await col.findOne({ certificateId: data.certificateId, _id: { $ne: existing._id } })) {
//       return NextResponse.json({ error: "This certificate number belongs to another certificate." }, { status: 409 });
//     }

//     const changes = FIELDS.filter((f) => String(existing[f]) !== String(data[f])).map((f) => ({
//       field: FIELD_LABELS[f],
//       from: String(existing[f]),
//       to: String(data[f]),
//     }));

//     if (changes.length === 0) {
//       return NextResponse.json({ item: serialize(existing), unchanged: true });
//     }

//     const now = new Date().toISOString();
//     const entry: EditLogEntry = { editedAt: now, changes };
//     await col.updateOne(
//       { _id: existing._id },
//       {
//         $set: { ...data, updatedAt: now },
//         $inc: { editCount: 1 },
//         $push: { editLog: entry },
//       }
//     );

//     const updated = await col.findOne({ _id: existing._id });
//     if (!updated) {
//       return NextResponse.json(
//         { error: "Certificate not found. It may have been deleted or is no longer available.", code: "NOT_FOUND" },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json({ item: serialize(updated) });
//   } catch (e) {
//     console.error("PUT /api/certificates", e);
//     return NextResponse.json({ error: errMsg(e) }, { status: 500 });
//   }
// }

// /* ---------------- DELETE (?id=...) ---------------- */
// export async function DELETE(req: NextRequest) {
//   try {
//     const id = new URL(req.url).searchParams.get("id") || "";
//     if (!ObjectId.isValid(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });

//     const col = await getCol();
//     const res = await col.deleteOne({ _id: new ObjectId(id) });

//     if (res.deletedCount === 0) {
//       return NextResponse.json(
//         { error: "This certificate has already been deleted.", code: "ALREADY_DELETED" },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json({ ok: true });
//   } catch (e) {
//     console.error("DELETE /api/certificates", e);
//     return NextResponse.json({ error: errMsg(e) }, { status: 500 });
//   }
// }











import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import type { Document, Filter } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { clean, serialize, FIELDS, FIELD_LABELS } from "@/lib/certificates";

export const dynamic = "force-dynamic";

type EditLogEntry = {
  editedAt: string;
  changes: {
    field: string;
    from: string;
    to: string;
  }[];
};

const getCol = async () =>
  (await clientPromise)
    .db(process.env.MONGODB_DB || "hyi")
    .collection("certificates");

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const errMsg = (e: unknown) =>
  e instanceof Error ? e.message : "Server error";

/* ---------------- GET: list + stats + next number ---------------- */

export async function GET(req: NextRequest) {
  try {
    const col = await getCol();
    const { searchParams } = new URL(req.url);

    const cls = searchParams.get("class");
    const q = searchParams.get("q")?.trim();

    const filter: Filter<Document> = {};

    if (cls && cls !== "all") {
      filter.studentClass = cls;
    }

    if (q) {
      const rx = new RegExp(esc(q), "i");

      filter.$or = [
        { studentName: rx },
        { fatherName: rx },
        { certificateId: rx },
      ];
    }

    const items = await col.find(filter).sort({ createdAt: -1 }).toArray();

    const total = await col.countDocuments();
    const edited = await col.countDocuments({ editCount: { $gt: 0 } });

    const grouped = await col
      .aggregate([
        {
          $group: {
            _id: "$studentClass",
            count: { $sum: 1 },
          },
        },
      ])
      .toArray();

    const byClass: Record<string, number> = {};

    grouped.forEach((g) => {
      byClass[String(g._id)] = g.count;
    });

    // Find the smallest unused certificate number for the current year
    const year = new Date().getFullYear();

    const rows = await col
      .find(
        {
          certificateId: {
            $regex: `^HYI/TRM/${year}/\\d+$`,
          },
        },
        {
          projection: { certificateId: 1 },
        }
      )
      .toArray();

    const usedSeq = rows
      .map((d) =>
        parseInt(String(d.certificateId).split("/").pop() || "0", 10)
      )
      .filter((n) => n > 0);

    const usedSet = new Set(usedSeq);

    let n = 1;

    while (usedSet.has(n)) {
      n++;
    }

    const nextId = `HYI/TRM/${year}/${String(n).padStart(2, "0")}`;

    return NextResponse.json({
      items: items.map(serialize),
      stats: {
        total,
        edited,
        byClass,
        nextId,
        usedSeq,
      },
    });
  } catch (e) {
    console.error("GET /api/certificates", e);

    return NextResponse.json(
      { error: errMsg(e) },
      { status: 500 }
    );
  }
}

/* ---------------- POST: create certificate ---------------- */

export async function POST(req: NextRequest) {
  try {
    const col = await getCol();
    const body = await req.json();

    const { data, error } = clean(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // Prevent duplicate certificate numbers
    if (await col.findOne({ certificateId: data.certificateId })) {
      return NextResponse.json(
        { error: "This certificate number has already been used." },
        { status: 409 }
      );
    }

    // Check duplicate student unless force is enabled
    if (!body.force) {
      const dup = await col.findOne({
        studentName: {
          $regex: `^${esc(data.studentName)}$`,
          $options: "i",
        },
        fatherName: {
          $regex: `^${esc(data.fatherName)}$`,
          $options: "i",
        },
        studentClass: data.studentClass,
      });

      if (dup) {
        return NextResponse.json(
          {
            error:
              "A certificate already exists for this name, father's name, and class.",
            code: "DUPLICATE_STUDENT",
          },
          { status: 409 }
        );
      }
    }

    const now = new Date().toISOString();

    const doc = {
      ...data,
      createdAt: now,
      updatedAt: now,
      editCount: 0,
      editLog: [] as EditLogEntry[],
    };

    const res = await col.insertOne(doc);

    return NextResponse.json(
      {
        item: serialize({
          ...doc,
          _id: res.insertedId,
        }),
      },
      { status: 201 }
    );
  } catch (e) {
    console.error("POST /api/certificates", e);

    return NextResponse.json(
      { error: errMsg(e) },
      { status: 500 }
    );
  }
}

/* ---------------- PUT: edit certificate (?id=...) ---------------- */

export async function PUT(req: NextRequest) {
  try {
    const id = new URL(req.url).searchParams.get("id") || "";

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid id" },
        { status: 400 }
      );
    }

    const col = await getCol();

    const existing = await col.findOne({
      _id: new ObjectId(id),
    });

    if (!existing) {
      return NextResponse.json(
        {
          error:
            "Certificate not found. It may have been deleted or is no longer available.",
          code: "NOT_FOUND",
        },
        { status: 404 }
      );
    }

    const body = await req.json();
    const { data, error } = clean(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // Prevent certificate number conflicts
    const duplicateCertificate = await col.findOne({
      certificateId: data.certificateId,
      _id: { $ne: existing._id },
    });

    if (duplicateCertificate) {
      return NextResponse.json(
        {
          error:
            "This certificate number belongs to another certificate.",
        },
        { status: 409 }
      );
    }

    // Track changed fields
    const changes = FIELDS.filter(
      (f) => String(existing[f]) !== String(data[f])
    ).map((f) => ({
      field: FIELD_LABELS[f],
      from: String(existing[f]),
      to: String(data[f]),
    }));

    if (changes.length === 0) {
      return NextResponse.json({
        item: serialize(existing),
        unchanged: true,
      });
    }

    const now = new Date().toISOString();

    const entry: EditLogEntry = {
      editedAt: now,
      changes,
    };

    // MongoDB update document
    const update: Document = {
      $set: {
        ...data,
        updatedAt: now,
      },
      $inc: {
        editCount: 1,
      },
      $push: {
        editLog: entry,
      },
    };

    await col.updateOne(
      { _id: existing._id },
      update
    );

    const updated = await col.findOne({
      _id: existing._id,
    });

    if (!updated) {
      return NextResponse.json(
        {
          error:
            "Certificate not found. It may have been deleted or is no longer available.",
          code: "NOT_FOUND",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      item: serialize(updated),
    });
  } catch (e) {
    console.error("PUT /api/certificates", e);

    return NextResponse.json(
      { error: errMsg(e) },
      { status: 500 }
    );
  }
}

/* ---------------- DELETE: delete certificate (?id=...) ---------------- */

export async function DELETE(req: NextRequest) {
  try {
    const id = new URL(req.url).searchParams.get("id") || "";

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid id" },
        { status: 400 }
      );
    }

    const col = await getCol();

    const res = await col.deleteOne({
      _id: new ObjectId(id),
    });

    if (res.deletedCount === 0) {
      return NextResponse.json(
        {
          error: "This certificate has already been deleted.",
          code: "ALREADY_DELETED",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("DELETE /api/certificates", e);

    return NextResponse.json(
      { error: errMsg(e) },
      { status: 500 }
    );
  }
}