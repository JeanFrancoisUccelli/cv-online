import type { ResumeData } from '../types';

/**
 * Portfolio section displaying a grid of project cards with demo and
 * GitHub repo links. Reads: portfolio.
 *
 * @param resumeData - The full resume data object; this component reads
 *   portfolio (name, description, imgurl, url, githuburl).
 */
export default function Portfolio({ resumeData }: { resumeData: ResumeData }) {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {resumeData.portfolio &&
              resumeData.portfolio.map((item) => {
                return (
                  <div className="columns portfolio-item" key={item.name}>
                    <div className="item-wrap">
                      <img
                        src={item.imgurl}
                        className="item-img"
                        alt=""
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Démo
                    </a>
                    <br />
                    <a
                      href={item.githuburl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repo Git hub
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
