import { lazy, ComponentType, LazyExoticComponent } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';

interface IRouterConfig {
  path: string;
  layout: ComponentType<any>;
  element: LazyExoticComponent<ComponentType<any>>;
}

export const routersConfig: IRouterConfig[] = [{
  path: '/',
  layout: BaseLayout,
  element: lazy(() => import('@/views/home')),
}, {
  path: '/login',
  layout: BaseLayout,
  element: lazy(() => import('@/views/login/index')),
},];
