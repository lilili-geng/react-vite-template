import { useRoutes } from 'react-router';
import * as reactIs from 'react-is';
import React, { ReactNode, FC, Suspense } from 'react';
import { routersConfig } from './config';

interface IProps {
  children: ReactNode;
  route?: any;
}

interface IConfigItem {
  element: React.ComponentType<any> | React.LazyExoticComponent<React.ComponentType<any>>;
  layout?: React.ComponentType<any>;
  cutomFallBack?: React.ReactNode;
  [key: string]: any;
}

// router before each component
const RouterBeforeEach: FC<IProps> = (props) => {
  const { children } = props;

  // const location = useLocation();
  // const { pathname } = location;
  // const access_token = localStorage.getItem('access_token');
  // const accessLogin = ['/register', '/login'].find((path) => pathname.startsWith(path));
  // if (route.meta?.title !== undefined) {
  //   document.title = route.meta.title;
  // }
  // if (!accessLogin && !access_token) {
  //   return <Navigate to="/login" replace />;
  // }

  return <>{children}</>;
}

const getLayoutComponent = (item: IConfigItem) => {
  const { layout: Layout } = item;
  if (reactIs.isValidElementType(Layout)) return Layout;
  return ({ children }: { children: ReactNode }) => <>{children}</>;
};

const wrapper = (configItem: IConfigItem) => {
  const { element: Child, cutomFallBack } = configItem;
  const Layout = getLayoutComponent(configItem);
  if (reactIs.isElement(Child)) { // element
    return <Layout>{Child}</Layout>;
  }
  const HandledChild = (
    <RouterBeforeEach route={configItem}>
      <Suspense fallback={cutomFallBack || <>...</>}>
        <Child />
      </Suspense>
    </RouterBeforeEach>
  );
  return ( // lazy component
    <Layout>
      {HandledChild}
    </Layout>
  );
};

const config = routersConfig.map((item: IConfigItem) => ({
  ...item,
  element: wrapper(item),
}));

export const RenderRouters = () => useRoutes(config);
