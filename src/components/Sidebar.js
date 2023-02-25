import React from 'react'


const renderDocumentation = (item) => {


    return (
        <li className="bd-links-group py-2" key={item.url}>
            <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                <i
                    className={`bi ${item.icon} me-2 mb-2`}
                    style={{ color: `var(${item.color})` }}
                ></i>
                {item.title}
            </strong>

            <ul className="list-unstyled fw-normal pb-2 small">
                {item.children?.map(
                    (child, i) => (
                        <li key={item.url + i}>
                            {/* {item.url}  + {child.url} */}
                            <a
                                href={item.url + child.url}
                                // href='https://www.google.com'
                                className="bd-links-link d-inline-block rounded"
                            >
                                {child.title}
                            </a>
                        </li>
                    )
                )}
            </ul >
        </li >
    );
};


const Sidebar = ({
    documentation,
    state,
}) => {
    return (
        <aside className="bd-sidebar">
            <div
                className="offcanvas-lg offcanvas-start"
                tabIndex={-1}
                id="bdSidebar"
                aria-labelledby="bdSidebarOffcanvasLabel"
            >
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title" id="bdSidebarOffcanvasLabel">
                        Browse docs
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        data-bs-target="#bdSidebar"
                    ></button>
                </div>

                <div className="offcanvas-body">
                    <nav
                        className="bd-links w-100"
                        id="bd-docs-nav"
                        aria-label="Docs navigation"
                    >
                        <ul className="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2">
                            {state === "success" || documentation.length > 0
                                ? documentation.map(renderDocumentation)
                                : null}
                            {state === "loading" ? <div className="spinner"></div> : null}

                            <li className="bd-links-span-all mt-1 mb-3 mx-4 border-top"></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

// import React from 'react'

// const sidebar = () => {
//     return (
//         <div>sidebar</div>
//     )
// }

// export default sidebar