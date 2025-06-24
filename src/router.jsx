import { 
    createRouter,
    RouterProvider,
    Route,
    RootRoute
} from '@tanstack/react-router'

import App from './App'
import Join from './routes/join'
import Projects from './routes/projects'
import Members from './routes/members'
import Home from './routes/home'

const rootRoute = new RootRoute({
    component:App,
})

const homeRoute = new Route({ 
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
})
const joinRoute = new Route({ 
    getParentRoute: () => rootRoute,
    path: '/join',
    component: Join
})
const membersRoute = new Route({ 
    getParentRoute: () => rootRoute,
    path: '/members',
    component: Members
})
const projectsRoute = new Route({ 
    getParentRoute: () => rootRoute,
    path: '/projects',
    component: Projects
})


const routeTree = rootRoute.addChildren([homeRoute,joinRoute,membersRoute,projectsRoute])

export const router = createRouter({routeTree})
