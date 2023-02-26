import React from 'react';

export default function DocumentationItemLayout({
  title,
  subtitle,
  content,
  tableOfContents,
}) {
  return (
    <main className="bd-main order-1">
      <div className="bd-intro pt-2 ps-lg-2">
        <div className="d-md-flex flex-md-row align-items-center justify-content-between">
          <h1 className="bd-title mb-0" id="content">
            {title}
          </h1>
        </div>
        <p className="bd-lead">{subtitle}</p>
      </div>
      <div className="bd-toc mt-3 mb-5 my-lg-0 ps-xl-3 mb-lg-5 text-body-secondary">
        <button
          className="btn btn-link p-md-0 mb-2 mb-md-0 text-decoration-none bd-toc-toggle d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#tocContents"
          aria-expanded="false"
          aria-controls="tocContents">
          On this page
          <i className="bi bi-chevron-expand d-md-none ms-2" />
        </button>
        <strong className="d-none d-md-block h6 my-2">On this page</strong>
        <hr className="d-none d-md-block my-2" />
        <div className="collapse bd-toc-collapse" id="tocContents">
          <nav id="TableOfContents">
            <ul>
              {tableOfContents.map(({ id, title, children }) => (
                <li>
                  <a href={`#${id}`}>{title}</a>
                  {children ? (
                    <ul>
                      {children.map((child) => (
                        <li>
                          <a href={`#${child.id}`}>{child.title}</a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="bd-content ps-lg-2">{content}</div>
    </main>
  );
}
