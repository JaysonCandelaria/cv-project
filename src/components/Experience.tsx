// src/components/Experience.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Experience: React.FC = () => {
  return (
    <section className="mb-6">
      <h2 className="h5 border-bottom pb-2 mb-3 fw-bold" style={{ color: '#000000' }}>Experience</h2>
        <div className="mb-3">
            <h6 className="fw-bold mb-0">Web Developer</h6>
            <small className="text-muted">
            Paramount Life & General Insurance Corp. &mdash; September 2024 – Present
            </small>
            <ul className="mt-2 ps-3">
            <li>
                Heading the development of the Seabase system, a major project built with Ruby on Rails,
                encompassing applications, reports, a dashboard, a mailer, and premium computations for
                seafarers' insurance, utilized by partner agencies.
            </li>
            <li>
                Develop and maintain the ParamountDirect system by improving its features and updating the code.
            </li>
            <li>One of those handling the stack upgrade of the system.</li>
            <li>Fixing the email concern due to a system error is required.</li>
            </ul>
            <h6 className="fw-bold mb-0">IT System Developer</h6>
                <small className="text-muted">
                    Kasagana-ka Credit and Savings Cooperative. &mdash; JULY 2018 – SEPTEMBER 2024
                </small>
                <ul className="mt-2 ps-3">
                    <li>Confirmed existing and new code that met industry best practices and coding standards for maintainability.</li>
                    <li>Observed industry best practices to promote efficient, compliant software development.</li>
                    <li>Verified and resolved bug reports and issues.</li>
                    <li>Managed development life cycles, from conceptualization through design, testing, and deployment.</li>
                    <li>Evaluated existing software to highlight functionality successes and opportunities.</li>
                    <li>Trained teams on new software programs to limit operational disruption.</li>
                    <li>Wrote clean, clear, and well-tested code for various projects.</li>
                    <li>Utilized Ruby on Rails and React to develop and maintain dynamic, high-performance web applications.</li>
                    <li>Maintained servers to ensure optimal performance, security, and uptime.</li>
                    <li>Handled PostgreSQL version updates, ensuring data integrity and minimal downtime.</li>
                </ul>


        </div>
        </section>
  );
};

export default Experience;
