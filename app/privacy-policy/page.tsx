import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-4 text-xl">How we protect and manage your information</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold">PRIVACY POLICY OF OCERA INFORMATIQUE</h2>

            <p>
              Ocera Informatique (OI) is committed to respecting the privacy of its clients, employees, and
              representatives. Our privacy policy outlines our standards for collecting, using, disclosing, and
              protecting your personal information.
            </p>

            <h3 className="text-xl font-bold">Personal Information:</h3>

            <p>
              The term "personal information" refers to any factual or subjective information concerning an identifiable
              individual. Personal information may be collected about various individuals with whom our company does
              business, including group and individual insured parties, beneficiaries, employees, and brokers.
            </p>

            <p>
              Personal information can be collected in various forms, including written (such as correspondence and
              memoranda) as well as electronic communications, audio recordings, and photographs.
            </p>

            <p>
              Examples of personal information may include details about a person's name, age, sex, health, personal
              characteristics, or personal and financial situation. Personal information may also include items such as
              identification numbers (like Social Insurance Numbers or employee numbers), banking and income
              information, employment records, credit records, and medical information.
            </p>

            <p>
              Personal information does not include the name, title, or business address, phone number, or email address
              of an organization's employees.
            </p>

            <p>
              Ocera Informatique adheres to the ten principles regarding fair information practices set out in the
              Personal Information Protection and Electronic Documents Act (PIPEDA).
            </p>

            <h3 className="text-xl font-bold">Accountability:</h3>

            <p>
              The privacy officer is responsible for implementing and ensuring that employees are trained on all aspects
              of the privacy policy. The Privacy Officer is also responsible for addressing any complaints regarding the
              handling of personal information.
            </p>

            <h3 className="text-xl font-bold">Purpose of information collection:</h3>

            <p>
              Ocera Informatique will only collect information necessary for the normal conduct of business activities.
              Individuals collecting information are expected to explain to individuals the purpose for which the
              information is being collected. OI will not collect, use, or disclose any information beyond what is
              necessary to achieve the specified purposes. Any information that we do not need will be securely
              destroyed.
            </p>

            <h3 className="text-xl font-bold">Consent:</h3>

            <p>
              Ocera Informatique will seek to obtain consent from an individual before collecting personal information.
              Consent may be requested in various ways depending on the circumstances. Sometimes, consent may be
              obtained from an authorized representative, such as a legal guardian or someone holding a power of
              attorney. We will disclose personal information to a third party only with your consent or as required by
              law.
            </p>

            <h3 className="text-xl font-bold">Limitation of collection:</h3>

            <p>We will only collect information reasonably necessary to fulfill the identified purposes.</p>

            <h3 className="text-xl font-bold">Limitation of use, disclosure, and retention:</h3>

            <p>
              We will use and retain the information only to the extent related to the purposes for which it was
              collected. All personal information that is no longer needed will be destroyed.
            </p>

            <h3 className="text-xl font-bold">Accuracy:</h3>

            <p>
              We make every effort to ensure that the personal information we collect is accurate, up to date, and
              complete.
            </p>

            <h3 className="text-xl font-bold">Security measures:</h3>

            <p>
              We have implemented protection measures and appropriate training to ensure that your personal information
              remains strictly confidential. Access to your information is limited to employees who need it. Precautions
              depend on the nature and format of the information collected. Methods include locking offices, desks, and
              filing cabinets, as well as technological measures designed to limit access to authorized individuals,
              including firewalls, passwords, and encryption.
            </p>

            <h3 className="text-xl font-bold">Transparency:</h3>

            <p>
              Ocera Informatique provides individuals, upon request, with specific information about its policies and
              procedures regarding the management of personal information, a description of the types of personal
              information held by the company, and a general account of its use. OI has made public the title and
              address of the individuals responsible for the company's policies regarding inquiries and complaints.
            </p>

            <h3 className="text-xl font-bold">Access to personal information:</h3>

            <p>
              You have the right to inquire about the existence, use, and disclosure of your personal information, and
              you will have access to that information. We can provide this information within a reasonable time after
              receiving your written request, generally within thirty days.
            </p>

            <p>
              In certain situations, we may refuse to provide you with the requested information if there are references
              to other individuals or if the information cannot be disclosed for legal or other reasons.
            </p>

            <h3 className="text-xl font-bold">Complaint process regarding non-compliance with principles:</h3>

            <p>
              If you have complaints regarding the protection of your personal information or the conduct of any of our
              employees concerning privacy, you may address this issue to our privacy officer:
            </p>

            <div className="my-6 rounded-lg bg-gray-50 p-6">
              <h4 className="text-lg font-bold">Chief privacy officer:</h4>
              <p>Ocera Informatique</p>
              <p>Abanoub Botros</p>
              <p>E-mail: info@ocera.ca</p>
              <p>Phone: 514 400 1259</p>
            </div>

            <h3 className="text-xl font-bold">Policy review:</h3>

            <p>
              Our privacy policy will be reviewed every three years or in the event of substantial changes to provincial
              and federal privacy legislation or other regulatory requirements.
            </p>

            <p>
              For more information about PIPEDA, you can visit their website at{" "}
              <a href="https://www.priv.gc.ca/en/" className="text-blue-600 hover:underline">
                https://www.priv.gc.ca/en/
              </a>
              .
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
