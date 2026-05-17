import type { ResumeData } from '../types';

/**
 * Site footer with social icon links and a "Back to Top" button.
 * Reads: socialLinks.
 *
 * @param resumeData - The full resume data object; this component reads
 *   socialLinks (name, url, className).
 */
export default function Footer({ resumeData }: { resumeData: ResumeData }) {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <a href={item.url}>
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}
