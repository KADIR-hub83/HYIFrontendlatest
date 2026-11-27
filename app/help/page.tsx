import React from "react";
import clsx from "clsx";
import Amazon from "@/assets/common/FloatableIcons/amazon.png";
import Airtable from "@/assets/common/FloatableIcons/airtable.png";
import Calendly from "@/assets/common/FloatableIcons/calendly.png";
import ClickUp from "@/assets/common/FloatableIcons/clickUp.png";
import Feedback from "@/assets/common/FloatableIcons/feedback.png";
import Google from "@/assets/common/FloatableIcons/google.png";
import Slack from "@/assets/common/FloatableIcons/slack.png";
import Useberry from "@/assets/common/FloatableIcons/useberry.png";
import Footer from "@/components/section/general/footer";
// import WorkOptions from "@/components/talent/work-options";
import CustomFloatableIcons2 from "@/components/shared/customFloatableIcons2";
import Header from "@/components/section/general/header";
import CustomWrapper from "@/components/shared/customWrapper";
import { Mail, Phone, Sparkle } from "lucide-react";
import star from "@/assets/shared/star-with-tick-purple.svg";
import indiaFlag from "@/assets/common/indiaFlag.png";
import indonesiaFlag from "@/assets/common/IndonesiaFlag.svg";
import ukFlag from "@/assets/common/ukFlag.svg";
import usaFlag from "@/assets/common/usaFlag.svg";
import vietnamFlag from "@/assets/common/vietnamFlag.svg";
import polandFlag from "@/assets/common/polandFlag.svg";
import Image from "next/image";

const techIcons = [
  { id: "amazon", src: Amazon, alt: "Amazon" },
  { id: "airtable", src: Airtable, alt: "Airtable" },
  { id: "calendly", src: Calendly, alt: "Calendly" },
  { id: "clickUp", src: ClickUp, alt: "ClickUp" },
  { id: "feedback", src: Feedback, alt: "Feedback" },
  { id: "google", src: Google, alt: "Google" },
  { id: "slack", src: Slack, alt: "Slack" },
  { id: "useberry", src: Useberry, alt: "Useberry" },
];
const Page = () => {
  return (
    <section className="w-full justify-center">
      <Header />
      <section className="relative w-full flex justify-center px-4 py-4 md:px-8 md:py-0 lg:items-center">
        <div className="absolute top-20 left-0 w-full h-full z-0">
          <CustomFloatableIcons2
            icons={techIcons}
            overlayMode={true}
            showContent={false}
          />
        </div>
        <div className="relative z-10">
          <div className="flex flex-col items-center justify-center gap-4 pt-10 pb-8 md:pt-24 md:pb-24 lg:pt-24 lg:pb-20">
            <h1 className="hyi-h1 text-center bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              Got Questions?<br></br>
              <span className="text-brand-600">We&apos;ve Got Answers.</span>
            </h1>
            <div className="text-[#D2D0DD] text-base sm:text-md md:text-lg text-center max-w-xl px-4">
              Fast, friendly support to keep you and your business moving
              forward.
            </div>
            <p className="hyi-p text-center">
              <span className="bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent">
                Instant Help Services
              </span>
              <Sparkle className="text-[#E6A7BD] inline mr-2 ml-2" size={16} />
              <span className="bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent">
                Smart Career Support
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <CustomWrapper divStyle=" flex flex-col gap-3">
        <h2 className="hyi-h2 text-center mb-7">Get help with HYI.AI</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Card 1  */}
          <Card>
            <Image
              className="hidden md:block"
              src={star}
              alt="star"
              width={28}
              height={28}
            />

            <h3 className="hyi-h3">Grievance & Compliance</h3>
       <p className="hyi-p">
  For any compliance-related questions or to raise a support ticket,
  please contact our compliance team at{" "}
  <a
    href="mailto:grievance@hyi.ai"
    className="hyi-blue"
  >
    grievance@hyi.ai
  </a>{" "}
  and for payment disputes{" "}
  <a
    href="mailto:nodal@hyi.ai"
    className="hyi-blue"
  >
    nodal@hyi.ai
  </a>
</p>
          </Card>

          {/* Card 2  */}
{/* Card 2 */}
<Card>
  <Image
    className="hidden md:block"
    src={star}
    alt="HYI.AI"
    width={28}
    height={28}
  />

  <h3 className="hyi-h3">HYI.AI Head Office</h3>

  {/* Office Address */}
  <p className="hyi-p">
    2nd Floor, Second Cross, 80 Feet Road, K.R. Garden,
    Koramangala, Bengaluru, Karnataka, India – 560034.
  </p>

  {/* General Enquiries */}
  <div className="flex gap-2 ">
    <p className="hyi-p font-medium">General Enquiries</p>

    <a
      href="mailto:info@hyi.ai"
      className="hyi-p hyi-blue"
    >
      info@hyi.ai
    </a>

    <a
      href="mailto:support@hyi.ai"
      className="hyi-p hyi-blue flex"
    >

      support@hyi.ai
    </a>
  </div>

  {/* Global Offices */}
  <div className="flex gap-3 ">
    <p className="hyi-p font-medium">Our Global Offices</p>

    <div className="flex flex-wrap items-center gap-3">
      <Image src={indiaFlag} alt="India" width={24} height={24} />
      <Image src={indonesiaFlag} alt="Indonesia" width={24} height={24} />
      <Image src={ukFlag} alt="United Kingdom" width={24} height={24} />
      <Image src={usaFlag} alt="United States" width={24} height={24} />
      <Image src={vietnamFlag} alt="Vietnam" width={24} height={24} />
      <Image src={polandFlag} alt="Poland" width={24} height={24} />
    </div>
  </div>
</Card>

          {/* Card 3  */}
          <Card className="h-full min-w-[300px]">
            <Image
              className="hidden md:block"
              src={star}
              alt="star"
              width={28}
              height={28}
            />

            <h3 className="hyi-h3">For Support & Billing</h3>

            <div className="flex flex-wrap gap-4">
              {/* column 1 */}
              <div className="flex flex-wrap gap-3">
                <div className="flex flex-col">
                  <p className="hyi-p text-sm mb-1">Talent</p>
                  <div className="flex items-center gap-2 hyi-p text-nowrap">
                    <Phone size={16} />
                    +91 9741968220
                  </div>

              <div className="flex items-center gap-2 hyi-p text-nowrap">
  <Mail size={16} />
  <a
    href="mailto:payout@hyi.ai"
    className="hyi-blue hover:opacity-80 transition-opacity"
  >
    payout@hyi.ai
  </a>
</div>
                </div>
              </div>

              {/* column 2 */}
              <div className="flex flex-wrap gap-3">
                <div className="flex flex-col">
                  <p className="hyi-p text-sm mb-1">Company</p>
                  <div className="flex items-center gap-2 hyi-p text-nowrap">
                    <Phone size={16} />
                    +91 7349129333
                  </div>

             <div className="flex items-center gap-2 hyi-p text-nowrap">
  <Mail size={16} />
  <a
    href="mailto:billing@hyi.ai"
    className="hyi-blue hover:opacity-80 transition-opacity"
  >
    billing@hyi.ai
  </a>
</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 4 */}
          <Card>
            <Image
              className="hidden md:block"
              src={star}
              alt="star"
              width={28}
              height={28}
            />

            <h3 className="hyi-h3">Sales Enquiries</h3>
          <p className="hyi-p">
  For sales inquiries or to connect with our sales team, email us at{" "}
  <a
    href="mailto:business@hyi.ai"
    className="hyi-blue hover:opacity-80 transition-opacity"
  >
    business@hyi.ai
  </a>
</p>
            <p className="hyi-p">
              Share your requirements, and we&apos;ll get in touch.
            </p>
          </Card>

          {/* Card 5 */}
          <Card>
            <Image
              className="hidden md:block"
              src={star}
              alt="star"
              width={28}
              height={28}
            />

            <h3 className="hyi-h3">Work at HYI.AI</h3>
          <p className="hyi-p">
  Are you interested in joining our remote team? Contact us at{" "}
  <a
    href="mailto:recruitment@hyi.ai"
    className="hyi-blue hover:opacity-80 transition-opacity"
  >
    recruitment@hyi.ai
  </a>
</p>
            <p className="hyi-p">
              We welcome talented individuals who are passionate about
              innovation.
            </p>
          </Card>
        </div>
      </CustomWrapper>
      <Footer />
    </section>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "relative rounded-2xl border border-white/10",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        "hover:border-violet-400/40 transition-colors",
        "p-5 sm:p-6",
        "flex flex-col gap-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Page;
