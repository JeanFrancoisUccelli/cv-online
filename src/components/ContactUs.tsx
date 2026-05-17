import type { ResumeData } from '../types';

/**
 * Contact section with LinkedIn, email, and French CV PDF links.
 * Reads: linkedinId.
 *
 * Note: The original used ReactGA.OutboundLink (Universal Analytics — dead
 * since July 2023). It has been replaced with a standard <a> tag pointing
 * to the same Google Drive PDF URL. No analytics replacement is added.
 *
 * @param resumeData - The full resume data object; this component reads
 *   linkedinId.
 */
export default function ContactUs({ resumeData }: { resumeData: ResumeData }) {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions with the links
            below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              <a
                href="https://www.linkedin.com/in/jeff-uccelli"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linked in :{resumeData.linkedinId}
              </a>
            </h4>
            <h4>
              <a href="mailto:jeanfrancoisuccelli@gmail.com">
                Mail : Jeff Uccelli
              </a>
            </h4>
            <h4>
              <a
                href="https://drive.google.com/file/d/1g-zsYpCWHcoRWS1PFsixk3goAE4xcVv6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mon CV en Francais au format pdf
              </a>
            </h4>
          </div>
        </aside>
      </div>
    </section>
  );
}
