import { ViteReactSSG } from 'vite-react-ssg'
import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { lazy } from 'react'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import './index.css'
import '@fontsource/inter'
import '@fontsource/playfair-display'

const Home = lazy(() => import('./pages/Home.jsx'))
const Treatments = lazy(() => import('./pages/Treatments.jsx'))
const TreatmentCategory = lazy(() => import('./pages/TreatmentCategory.jsx'))
const TreatmentSubCategory = lazy(() => import('./pages/TreatmentSubCategory.jsx'))
const Conditions = lazy(() => import('./pages/Conditions.jsx'))
const Programme = lazy(() => import('./pages/Programme.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Philosophy = lazy(() => import('./pages/Philosophy.jsx'))
const Manifesto = lazy(() => import('./pages/Manifesto.jsx'))
const Founder = lazy(() => import('./pages/Founder.jsx'))
const Treatment = lazy(() => import('./pages/Treatment.jsx'))
const ConditionDetail = lazy(() => import('./pages/ConditionDetail.jsx'))
const Blogs = lazy(() => import('./pages/Blogs.jsx'))
const BlogDetail = lazy(() => import('./pages/BlogDetail.jsx'))
const ProgrammeDetail = lazy(() => import('./pages/ProgrammeDetail.jsx'))
const ToolDetail = lazy(() => import('./pages/ToolDetail.jsx'))
const PathwayDetail = lazy(() => import('./pages/PathwayDetail.jsx'))
const HelpAndSupport = lazy(() => import('./pages/HelpAndSupport.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const BookConsultation = lazy(() => import('./pages/BookConsultation.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse.jsx'))
const Disclaimer = lazy(() => import('./pages/Disclaimer.jsx'))


const RedirectToProgramme = () => {
  const { id } = useParams();
  return <Navigate to={`/treatments/radiate/pathways/${id ? id.toLowerCase() : ''}`} replace />;
};

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'treatments',
        element: <Treatments />,
      },
      {
        path: 'treatments/:category',
        element: <TreatmentCategory />,
      },
      {
        path: 'treatments/radiate/programmes',
        element: <Programme />,
      },
      {
        path: 'treatments/radiate/pathways',
        element: <Programme />,
      },
      {
        path: 'treatments/radiate/programmes/:id',
        element: <ProgrammeDetail />,
      },
      {
        path: 'treatments/radiate/pathways/:id',
        element: <ProgrammeDetail />,
      },
      {
        path: 'treatments/:category/:subcategory',
        element: <TreatmentSubCategory />,
      },
      {
        path: 'treatments/:category/:subcategory/:id',
        element: <Treatment />,
      },
      {
        path: 'tools/:id',
        element: <ToolDetail />,
      },
      {
        path: 'pathways',
        element: <Navigate to="/treatments" replace />,
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
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'blogs/:id',
        element: <BlogDetail />,
      },
      {
        path: 'programmes',
        element: <Navigate to="/treatments/radiate/pathways" replace />,
      },
      {
        path: 'programmes/:id',
        element: <RedirectToProgramme />,
      },
      {
        path: 'help-and-support',
        element: <HelpAndSupport />,
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
        path: 'book-consultation',
        element: <BookConsultation />,
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
    // Custom setup if needed
  }
)

export default createRoot
