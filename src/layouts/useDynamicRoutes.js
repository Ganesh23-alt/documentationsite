import { lazy, useState, useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Loading from '../pages/loading';


const useDynamicRoutes = (documentation) => {
    const [router, setRouter] = useState(
        createBrowserRouter([
            {
                path: "/",
                element: < Loading />,
            }

        ]),
    );

    useEffect(() => {

        if (documentation.length) {
            const newRoutes = [];

            documentation.forEach((doc) => {
                doc.children?.forEach((child) => {
                    const path = `${doc?.url}${child?.url}`;

                    const Component = lazy(
                        async () => await import("../pages" + path + ".js")
                    );
                    newRoutes.push(
                        {
                            path: doc.url + child.url,
                            element: (
                                <Component />
                            ),
                        });
                });
            });

            setRouter(createBrowserRouter([...newRoutes]));
        }
    }, [documentation]);
    return { router }
};

export default useDynamicRoutes;

