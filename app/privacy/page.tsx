import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Privacy Policy | Nerva",
    description:
        "Learn how Cheratis OÜ processes and protects the personal data of users of nerva.live.",
};

const LAST_UPDATED = "21/09/2026";
const PRIVACY_EMAIL = "info@nerva.live";

type SectionProps = {
    id: string;
    title: string;
    children: ReactNode;
};

function PrivacySection({ id, title, children }: SectionProps) {
    return (
        <section aria-labelledby={id} className="scroll-mt-24">
            <h2
                id={id}
                className="mb-5 text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl"
            >
                {title}
            </h2>

            <div className="space-y-4 leading-7 text-zinc-700">
                {children}
            </div>
        </section>
    );
}

function PrivacyList({ children }: { children: ReactNode }) {
    return <ul className="list-disc space-y-2 pl-6">{children}</ul>;
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <article className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
                <header className="mb-12 border-b border-zinc-200 pb-8">

                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-5 text-sm text-zinc-500">
                        Last updated: {LAST_UPDATED}
                    </p>

                    <p className="mt-6 leading-7 text-zinc-600">
                        This policy explains how Cheratis OÜ collects, uses and
                        protects personal data in connection with the operation
                        of the nerva.live website, hereinafter referred
                        to as the “Site”.
                    </p>

                    <p className="mt-4 leading-7 text-zinc-600">
                        It applies in particular to visitors, prospective buyers,
                        sellers and people who contact us, especially in Belgium,
                        France and Luxembourg.
                    </p>
                </header>

                <div className="space-y-12">
                    <PrivacySection
                        id="responsable"
                        title="1. Data controller"
                    >
                        <p>
                            For the processing activities whose purposes
                            and means it determines, the data controller is:
                        </p>

                        <dl className="space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                            <div>
                                <dt className="font-semibold text-zinc-950">
                                    Company
                                </dt>
                                <dd>Cheratis OÜ, a company incorporated under Estonian law</dd>
                            </div>

                            <div>
                                <dt className="font-semibold text-zinc-950">
                                    Registration number
                                </dt>
                                <dd>14661024</dd>
                            </div>

                            <div>
                                <dt className="font-semibold text-zinc-950">
                                    Address
                                </dt>
                                <dd>
                                    Harju maakond, Kuusalu vald, Pudisoo küla,
                                    71009 Männimäe, Estonia
                                </dd>
                            </div>

                            <div>
                                <dt className="font-semibold text-zinc-950">
                                    Contact for personal data matters
                                </dt>
                                <dd className="wrap-break-word">{PRIVACY_EMAIL}</dd>
                            </div>
                        </dl>

                        <p>
                            Processing is subject to the General Data Protection
                            Regulation (GDPR) and applicable national rules.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="donnees"
                        title="2. Personal data we process"
                    >
                        <p>
                            Depending on the features you use and your interactions
                            with our team, we may process the following categories
                            of data:
                        </p>

                        <PrivacyList>
                            <li>
                                <strong>Identity and contact details:</strong> first
                                and last name, email address, telephone number and country.
                            </li>
                            <li>
                                <strong>Professional information:</strong> company,
                                job title, professional contact details and information
                                needed to identify professional sellers.
                            </li>
                            <li>
                                <strong>Account data, if this feature is available:</strong>{" "}
                                username, profile information, preferences
                                and data required for authentication.
                            </li>
                            <li>
                                <strong>Listings and enquiries:</strong> vehicle
                                information, photographs, saved listings
                                and enquiries sent to sellers.
                            </li>
                            <li>
                                <strong>Correspondence:</strong> messages, support
                                requests, complaints and reports.
                            </li>
                            <li>
                                <strong>Technical data:</strong> IP address,
                                browser and device characteristics,
                                connection logs and security events.
                            </li>
                            <li>
                                <strong>Billing data, if a service is paid:</strong>{" "}
                                billing details, services ordered,
                                amounts and transaction references.
                            </li>
                            <li>
                                <strong>Privacy choices:</strong> cookie preferences,
                                consents and objections.
                            </li>
                        </PrivacyList>



                        <p>
                            Please do not provide sensitive data or personal
                            documents unless necessary. Before publishing
                            photographs or documents, hide any personal information
                            that is not relevant to the listing.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="sources"
                        title="3. Sources of data"
                    >
                        <p>
                            Some vehicle-related information may come from third-party
                            services, including carVertical, autoDNA and the
                            National Highway Traffic Safety Administration (NHTSA).
                            Depending on the source and information available, it may
                            relate to the vehicle’s technical specifications,
                            identification by VIN, history, recorded mileage,
                            reported damage or safety recalls.
                        </p>

                        <p>
                            This information is used to supplement listings
                            and inform users about the vehicles offered.
                            It does not always constitute personal data, but may
                            become personal data when it can be linked to an
                            identifiable person.
                        </p>

                        <p>
                            When we obtain personal data in this way, we inform
                            the individuals concerned in accordance with Article 14
                            of the GDPR, including about the source, categories of data
                            and its use, unless a legal exception applies. This
                            information is provided within the statutory time limits:
                            generally within one month and, if earlier, at the time
                            of the first communication with the individual or the
                            first disclosure to another recipient.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="finalites"
                        title="4. Purposes and legal bases"
                    >
                        <p>
                            Each processing activity is based on an appropriate
                            legal basis for its purpose. The processing activities
                            relating to features actually offered are set out below.
                        </p>

                        <div className="overflow-x-auto rounded-xl border border-zinc-200">
                            <table className="w-full min-w-140 border-collapse text-left text-sm">
                                <caption className="sr-only">
                                    Processing purposes and legal bases
                                </caption>

                                <thead className="bg-zinc-50 text-zinc-950">
                                    <tr>
                                        <th scope="col" className="p-4 font-semibold">
                                            Purpose
                                        </th>
                                        <th scope="col" className="p-4 font-semibold">
                                            Legal basis
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-zinc-200">
                                    <tr>
                                        <td className="p-4 align-top">
                                            Create and manage an account, publish a listing
                                            and provide the requested services.
                                        </td>
                                        <td className="p-4 align-top">
                                            Performance of a contract or pre-contractual
                                            steps taken at your request.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 align-top">
                                            Send an enquiry to the seller you wish to contact.
                                        </td>
                                        <td className="p-4 align-top">
                                            Performance of the requested matchmaking service.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 align-top">
                                            Respond to an information or support request.
                                        </td>
                                        <td className="p-4 align-top">
                                            Pre-contractual steps or performance of a contract
                                            when the request concerns a service; otherwise,
                                            our legitimate interest in responding to enquiries.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 align-top">
                                            Secure the Site, prevent fraud
                                            and address misuse.
                                        </td>
                                        <td className="p-4 align-top">
                                            Legitimate interest in protecting users
                                            and systems; legal obligation where a specific
                                            processing activity is required by law.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 align-top">
                                            Prepare and retain accounting records
                                            relating to paid services.
                                        </td>
                                        <td className="p-4 align-top">
                                            Performance of a contract for billing
                                            and compliance with accounting and tax
                                            obligations for retention.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 align-top">
                                            Send newsletters or marketing communications
                                            for which consent is required.
                                        </td>
                                        <td className="p-4 align-top">
                                            Consent, which may be withdrawn at any time.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 align-top">
                                            Use optional audience measurement,
                                            personalization or advertising trackers.
                                        </td>
                                        <td className="p-4 align-top">
                                            Prior consent where required.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-4 align-top">
                                            Manage a dispute and defend our rights.
                                        </td>
                                        <td className="p-4 align-top">
                                            Legitimate interest in establishing,
                                            exercising or defending legal claims.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            When processing is based on our legitimate interest,
                            we consider its effects on your rights and freedoms.
                            You may object under the conditions set out in the GDPR.
                        </p>

                        <p>
                            Required fields are identified when data is collected.
                            If you do not provide the necessary data, we may be unable
                            to process your request or provide the relevant service.
                            All other information is optional.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="destinataires"
                        title="5. Data recipients"
                    >
                        <p>
                            Where necessary for their duties, data may be accessed by:
                        </p>

                        <PrivacyList>
                            <li>
                                Authorised personnel at nerva.live.
                            </li>
                            <li>
                                Technical service providers acting on our behalf:
                                hosting, maintenance, email, support
                                and security providers.
                            </li>
                            <li>
                                Payment service providers, where paid services
                                are offered.
                            </li>
                            <li>
                                The relevant seller when you ask to contact them.
                            </li>
                            <li>
                                Professional advisers, authorities or courts
                                where disclosure is necessary and legally justified.
                            </li>
                        </PrivacyList>

                        <p>
                            Processors acting on our behalf are subject to
                            appropriate contractual obligations, including
                            confidentiality and security requirements.
                        </p>

                        <p>
                            Information you choose to make public in a listing
                            may be viewed by visitors and, depending on the Site’s
                            configuration, indexed by search engines.
                        </p>

                        <p>
                            [Specify the service providers actually used,
                            their functions and, where relevant, their country of processing.]
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="vendeurs"
                        title="6. Data shared with sellers"
                    >
                        <p>
                            When you ask to contact a seller, the information
                            necessary to process your request, including your contact
                            details and message, may be shared with them. The relevant
                            information is specified when you use the form.
                        </p>

                        <p>
                            Where a seller independently determines the purposes
                            and means of their processing, in particular to respond
                            to your request or prepare a sale, they act as a separate
                            data controller.
                        </p>

                        <p>
                            For processing carried out by that seller, please consult
                            their privacy information and contact them directly
                            with requests relating to your data. This does not limit
                            Cheratis OÜ’s obligations for processing for which it
                            is responsible.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="transferts"
                        title="7. Data hosting and location"
                    >
                        <p>
                            Your personal data is hosted on servers located
                            in the European Economic Area (EEA). No transfers
                            of this data outside the EEA take place in connection
                            with the processing activities described in this policy.
                        </p>

                        <p>
                            If this changes, we will update this policy and ensure
                            that the relevant transfers are governed in accordance
                            with GDPR requirements.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="conservation"
                        title="8. Data retention periods"
                    >
                        <p>
                            We retain your personal data only for as long
                            as necessary for the purposes for which it was collected:
                        </p>

                        <PrivacyList>
                            <li>
                                <strong>Accounts and listings:</strong> for as long
                                as the account is in use or the listing is published.
                                After an account is closed or a listing is removed,
                                the data is deleted unless it must be retained
                                for a reason set out below.
                            </li>

                            <li>
                                <strong>Enquiries and correspondence:</strong> while
                                your request is being handled and until the exchanges
                                needed to follow it up have concluded.
                            </li>

                            <li>
                                <strong>Accounting documents:</strong> for the retention
                                periods required by applicable law.
                            </li>

                            <li>
                                <strong>Marketing communications:</strong> until you
                                withdraw your consent or object, and no later than
                                when the data is no longer needed for this purpose.
                                The minimum information needed to honour your objection
                                may be retained.
                            </li>

                            <li>
                                <strong>Cookies and trackers:</strong> for the periods
                                indicated in the cookie notice, accessible from the Site.
                            </li>
                        </PrivacyList>

                        <p>
                            Some data may be kept with restricted access to comply
                            with a legal obligation, demonstrate your consent choices
                            or manage a dispute, for as long as necessary for these
                            purposes and in accordance with applicable legal time limits.
                            Once the retention period ends, the data is deleted
                            or anonymised.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="cookies"
                        title="9. Cookies and similar technologies"
                    >

                        <p>
                            The Site uses Cookiebot, a consent management platform,
                            to collect and manage your choices regarding cookies
                            and similar technologies, in accordance with the applicable
                            requirements of the GDPR and rules on trackers.
                        </p>

                        <p>
                            Cookies and trackers that require consent are not activated
                            until you have given your consent. You can accept, reject
                            or customise their use and change your preferences at any
                            time, including to withdraw your consent.
                        </p>

                    </PrivacySection>

                    <PrivacySection
                        id="securite"
                        title="10. Data security"
                    >
                        <p>
                            We implement technical and organisational measures
                            appropriate to the risks to protect data against
                            unauthorised access, loss, alteration or disclosure.
                        </p>

                        <p>
                            Access to data is limited to people who need it
                            to perform their duties. Security measures are reviewed
                            as processing activities and risks evolve.
                        </p>

                        <p>
                            No system can guarantee absolute security.
                            In the event of a data breach, we meet our obligations
                            to document and notify the competent authority and,
                            where required, inform the individuals concerned.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="droits"
                        title="11. Your rights"
                    >
                        <p>
                            Subject to the conditions and limitations set out
                            in the GDPR, you have the following rights:
                        </p>

                        <PrivacyList>
                            <li>
                                <strong>Access:</strong> find out what data about you
                                is being processed and obtain a copy.
                            </li>
                            <li>
                                <strong>Rectification:</strong> correct inaccurate data
                                or complete incomplete data.
                            </li>
                            <li>
                                <strong>Erasure:</strong> request the deletion of your
                                data where the relevant conditions are met.
                            </li>
                            <li>
                                <strong>Restriction:</strong> request that certain uses
                                of your data be suspended.
                            </li>
                            <li>
                                <strong>Data portability:</strong> receive certain data
                                you provided in a structured, commonly used
                                and machine-readable format where the processing
                                is based on consent or a contract.
                            </li>
                            <li>
                                <strong>Objection:</strong> object, on grounds relating
                                to your particular situation, to processing based
                                on legitimate interests.
                            </li>
                            <li>
                                <strong>Objection to direct marketing:</strong> object
                                at any time and without giving a reason to the use
                                of your data for marketing purposes, including
                                profiling related to that marketing.
                            </li>
                            <li>
                                <strong>Withdrawal of consent:</strong> withdraw
                                your consent at any time, without affecting the
                                lawfulness of processing carried out before
                                the withdrawal.
                            </li>
                        </PrivacyList>

                        <p>
                            To exercise your rights, write to {PRIVACY_EMAIL},
                            describing your request and providing the information
                            needed to locate the relevant data.
                        </p>

                        <p>
                            If we have reasonable doubts about your identity,
                            we may request proportionate additional information.
                            We do not routinely require a copy of an identity document.
                        </p>

                        <p>
                            We generally respond within one month of receiving
                            your request. This period may be extended by two months
                            if necessary, taking into account the complexity
                            and number of requests. You will be informed of the
                            extension and the reasons for it within the first month.
                        </p>

                        <p>
                            Exercising your rights is generally free of charge.
                            Legal exceptions, including for requests that are
                            manifestly unfounded or excessive, continue to apply.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="automatisation"
                        title="12. Automated decisions and profiling"
                    >
                        <p>
                            Nerva does not profile users in connection
                            with the operation of nerva.live.
                        </p>

                        <p>
                            No decision based solely on automated processing that
                            produces legal effects concerning you or similarly
                            significantly affects you is made in connection with
                            the Site’s services.
                        </p>
                    </PrivacySection>
                    <PrivacySection
                        id="reclamation"
                        title="13. Complaints to a supervisory authority"
                    >
                        <p>
                            If you believe that the processing of your data
                            does not comply with the law, you may lodge a complaint
                            with a supervisory authority, in particular in the
                            EU Member State of your habitual residence, place
                            of work or the place of the alleged infringement.
                        </p>

                        <PrivacyList>
                            <li>
                                <strong>Estonia:</strong> Andmekaitse Inspektsioon (AKI)
                                —{" "}
                                <a
                                    href="https://www.aki.ee/"
                                    className="underline underline-offset-4"
                                >
                                    www.aki.ee
                                </a>
                            </li>
                            <li>
                                <strong>France:</strong> Commission nationale
                                de l’informatique et des libertés (CNIL)
                                —{" "}
                                <a
                                    href="https://www.cnil.fr/"
                                    className="underline underline-offset-4"
                                >
                                    www.cnil.fr
                                </a>
                            </li>
                            <li>
                                <strong>Belgium:</strong> Data Protection Authority (APD)
                                —{" "}
                                <a
                                    href="https://www.autoriteprotectiondonnees.be/"
                                    className="underline underline-offset-4"
                                >
                                    www.autoriteprotectiondonnees.be
                                </a>
                            </li>
                            <li>
                                <strong>Luxembourg:</strong> Commission nationale
                                pour la protection des données (CNPD)
                                —{" "}
                                <a
                                    href="https://cnpd.public.lu/"
                                    className="underline underline-offset-4"
                                >
                                    cnpd.public.lu
                                </a>
                            </li>
                        </PrivacyList>

                        <p>
                            You may contact us first to try to resolve an issue,
                            but doing so is not a requirement for lodging a complaint
                            with an authority.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="sites-tiers"
                        title="14. Third-party websites and services"
                    >
                        <p>
                            The Site may contain links to websites operated
                            by third parties. Their processing activities are
                            described in their own privacy policies.
                        </p>

                        <p>
                            We may use third-party services that we do not control. Those services
                            may process data in accordance with their own privacy policies and
                            practices.
                        </p>
                    </PrivacySection>

                    <PrivacySection
                        id="modifications"
                        title="15. Changes to this policy"
                    >
                        <p>
                            This policy may be updated to reflect changes
                            to the Site, our processing activities
                            or the law.
                        </p>

                        <p>
                            The update date appears at the top of this page.
                            If there is a significant change, appropriate
                            information will be provided to the individuals concerned.
                        </p>

                        <p>
                            If a new processing activity requires your consent,
                            that consent will be requested before the activity begins.
                            Publishing a new version of this policy does not,
                            by itself, constitute consent.
                        </p>
                    </PrivacySection>
                </div>

                <footer className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
                    <p>
                        nerva.live — Operated by Cheratis OÜ — Estonia
                    </p>
                </footer>
            </article>
        </main>
    );
}