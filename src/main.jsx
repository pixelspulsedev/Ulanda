import { ViteReactSSG } from 'vite-react-ssg'
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'
import App from './App.jsx'
import './index.css'
import '@fontsource/inter'
import '@fontsource/playfair-display'

const Home = lazy(() => import('./pages/Home.jsx'))
const Pathways = lazy(() => import('./pages/Pathways.jsx'))
const Conditions = lazy(() => import('./pages/Conditions.jsx'))
const Programme = lazy(() => import('./pages/Programme.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Philosophy = lazy(() => import('./pages/Philosophy.jsx'))
const Manifesto = lazy(() => import('./pages/Manifesto.jsx'))
const Founder = lazy(() => import('./pages/Founder.jsx'))
const Treatment = lazy(() => import('./pages/Treatment.jsx'))
const ConditionDetail = lazy(() => import('./pages/ConditionDetail.jsx'))
const ProgrammeDetail = lazy(() => import('./pages/ProgrammeDetail.jsx'))
const ToolDetail = lazy(() => import('./pages/ToolDetail.jsx'))
const PathwayDetail = lazy(() => import('./pages/PathwayDetail.jsx'))
const HelpAndSupport = lazy(() => import('./pages/HelpAndSupport.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse.jsx'))
const Disclaimer = lazy(() => import('./pages/Disclaimer.jsx'))

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pathways',
        element: <Pathways />,
      },
      {
        path: 'pathways/:id',
        element: <PathwayDetail />,
      },
      {
        path: 'conditions',
        element: <Conditions />,
      },
      {
        path: 'conditions/:category/:id',
        element: <ConditionDetail />,
      },
      {
        path: 'conditions/:id',
        element: <ConditionDetail />,
      },
      {
        path: 'programmes',
        element: <Programme />,
      },
      {
        path: 'programmes/:id',
        element: <ProgrammeDetail />,
      },
      {
        path: 'help-and-support',
        element: <HelpAndSupport />,
      },
      {
        path: 'treatments/:category',
        element: <PathwayDetail />,
      },
      {
        path: 'treatments/:category/:id',
        element: <Treatment />,
      },
      {
        path: 'treatments/:category/:treatmentId/:id',
        element: <ToolDetail />,
      },
      {
        path: 'about',
        element: <Navigate to="/about/our-story" replace />,
      },
      {
        path: 'about/our-story',
        element: <About />,
      },
      {
        path: 'about/our-philosophy',
        element: <Philosophy />,
      },
      {
        path: 'about/manifesto',
        element: <Manifesto />,
      },
      {
        path: 'about/our-founder',
        element: <Founder />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'terms-of-use',
        element: <TermsOfUse />,
      },
      {
        path: 'disclaimer',
        element: <Disclaimer />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export const createRoot = ViteReactSSG(
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    // ...
  }
)

export default createRoot
