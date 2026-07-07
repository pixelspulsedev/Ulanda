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
// NEW Treatment Structure (6 categories + Pelvic pathway)
const Treatments = lazy(() => import('./data/pageContents/treatments/drafts/Treatments_draft.jsx'))
const TreatmentCategory = lazy(() => import('./data/pageContents/treatments/drafts/TreatmentCategory_draft.jsx'))
const Treatment = lazy(() => import('./data/pageContents/treatments/drafts/Treatment_draft.jsx'))
// Dedicated barrier protocol pages
const AdvancedSkinHealthConsultation = lazy(() => import('./pages/AdvancedSkinHealthConsultation.jsx'))
const SkinBarrierRenewalProtocol = lazy(() => import('./pages/SkinBarrierRenewalProtocol.jsx'))
const MedicalAestheticsClinic = lazy(() => import('./pages/MedicalAestheticsClinic.jsx'))
const ObagiMedical = lazy(() => import('./pages/ObagiMedical.jsx'))
const PrescriptionSkincare = lazy(() => import('./pages/PrescriptionSkincare.jsx'))
const ObagiPrescriptionSkincare = lazy(() => import('./pages/ObagiPrescriptionSkincare.jsx'))
// Conditions
const Conditions = lazy(() => import('./pages/Conditions.jsx'))
const ConditionDetail = lazy(() => import('./pages/ConditionDetail.jsx'))
const NonResponsiveSkin = lazy(() => import('./data/pageContents/conditions/drafts/NonResponsiveSkin_draft.jsx'))
// Company pages
const About = lazy(() => import('./pages/About.jsx'))
const ClinicalSystem = lazy(() => import('./pages/ClinicalSystem.jsx'))
const Philosophy = lazy(() => import('./pages/Philosophy.jsx'))
const Manifesto = lazy(() => import('./pages/Manifesto.jsx'))
const Founder = lazy(() => import('./pages/Founder.jsx'))
// Blogs & Articles
const Blogs = lazy(() => import('./pages/Blogs.jsx'))
const BlogDetail = lazy(() => import('./pages/BlogDetail.jsx'))
// Authority Journal
const JournalLanding = lazy(() => import('./pages/JournalLanding.jsx'))
const JournalDetail = lazy(() => import('./pages/JournalDetail.jsx'))
// Programmes & Tools
const Programme = lazy(() => import('./pages/Programme.jsx'))
const ProgrammeDetail = lazy(() => import('./pages/ProgrammeDetail.jsx'))
const ToolDetail = lazy(() => import('./pages/ToolDetail.jsx'))
const PathwayDetail = lazy(() => import('./pages/PathwayDetail.jsx'))
// Signature
const SignatureHub = lazy(() => import('./pages/SignatureHub.jsx'))
const SignatureDetail = lazy(() => import('./pages/SignatureDetail.jsx'))
// Location pages
const AestheticClinicWelwynGardenCity = lazy(() => import('./pages/locations/AestheticClinicWelwynGardenCity.jsx'))
const AestheticClinicStevenage = lazy(() => import('./pages/locations/AestheticClinicStevenage.jsx'))
const AestheticClinicSawbridgeworth = lazy(() => import('./pages/locations/AestheticClinicSawbridgeworth.jsx'))
const AestheticClinicHertfordshire = lazy(() => import('./pages/locations/AestheticClinicHertfordshire.jsx'))
const AestheticClinicHoddesdon = lazy(() => import('./pages/locations/AestheticClinicHoddesdon.jsx'))
const AestheticClinicHertford = lazy(() => import('./pages/locations/AestheticClinicHertford.jsx'))
const AestheticClinicHarlow = lazy(() => import('./pages/locations/AestheticClinicHarlow.jsx'))
const AestheticClinicCheshunt = lazy(() => import('./pages/locations/AestheticClinicCheshunt.jsx'))
const AestheticClinicBroxbourne = lazy(() => import('./pages/locations/AestheticClinicBroxbourne.jsx'))
const AestheticClinicBishopsStortford = lazy(() => import('./pages/locations/AestheticClinicBishopsStortford.jsx'))
const AestheticClinicWare = lazy(() => import('./pages/locations/AestheticClinicWare.jsx'))
const AestheticClinicStansteadAbbotts = lazy(() => import('./pages/locations/AestheticClinicStansteadAbbotts.jsx'))
const AestheticClinicGreatAmwell = lazy(() => import('./pages/locations/AestheticClinicGreatAmwell.jsx'))
const AestheticClinicBuntingford = lazy(() => import('./pages/locations/AestheticClinicBuntingford.jsx'))
// General pages
const HelpAndSupport = lazy(() => import('./pages/HelpAndSupport.jsx'))
const SkinShiftGuide = lazy(() => import('./pages/SkinShiftGuide.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const BookConsultation = lazy(() => import('./pages/BookConsultation.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse.jsx'))
const Disclaimer = lazy(() => import('./pages/Disclaimer.jsx'))

const RedirectToProgramme = () => {
  const { id } = useParams();
  return <Navigate to={`/signature`} replace />;
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
      // Signature routes (canonical)
      {
        path: 'signature',
        element: <SignatureHub />,
      },
      {
        path: 'signature/:id',
        element: <SignatureDetail />,
      },
      {
        path: 'treatments',
        element: <Treatments />,
      },
      // Dedicated barrier protocol pages (must come before :category catch-all)
      {
        path: 'treatments/advanced-skin-health-consultation',
        element: <AdvancedSkinHealthConsultation />,
      },
      {
        path: 'treatments/skin-barrier-renewal-protocol',
        element: <SkinBarrierRenewalProtocol />,
      },
      {
        path: 'treatments/medical-aesthetics-clinic',
        element: <MedicalAestheticsClinic />,
      },
      {
        path: 'treatments/prescription-skincare',
        element: <PrescriptionSkincare />,
      },
      {
        path: 'treatments/prescription-skincare/obagi-medical',
        element: <ObagiMedical />,
      },
      {
        path: 'treatments/obagi-prescription-skincare',
        element: <Navigate to="/treatments/prescription-skincare/obagi-medical" replace />,
      },
      {
        path: 'treatments/:category',
        element: <TreatmentCategory />,
      },
      {
        path: 'treatments/:category/:id',
        element: <Treatment />,
      },
      // Legacy pathway routes - redirect to Signature
      {
        path: 'treatments/radiate/programmes/:id',
        element: <Navigate to="/signature" replace />,
      },
      {
        path: 'treatments/radiate/pathways/:id',
        element: <Navigate to="/signature" replace />,
      },
      {
        path: 'treatments/radiate/pathways',
        element: <Navigate to="/signature" replace />,
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
      // {
      //   path: 'conditions/non-responsive-skin',
      //   element: <NonResponsiveSkin />,
      // },
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
      // Authority Journal (non-menu, indexed, crawlable)
      {
        path: 'journal',
        element: <JournalLanding />,
      },
      {
        path: 'journal/:slug',
        element: <JournalDetail />,
      },
      {
        path: 'programmes',
        element: <Navigate to="/signature" replace />,
      },
      {
        path: 'programmes/:id',
        element: <Navigate to="/signature" replace />,
      },
      {
        path: 'help-and-support',
        element: <HelpAndSupport />,
      },
      {
        path: 'downloads/skin-health',
        element: <SkinShiftGuide />,
      },

      {
        path: 'clinical-system',
        element: <ClinicalSystem />,
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
        path: 'locations',
        element: <Navigate to="/locations/aesthetic-clinic-hertfordshire" replace />,
      },
      {
        path: 'locations/aesthetic-clinic-welwyn-garden-city',
        element: <AestheticClinicWelwynGardenCity />,
      },
      {
        path: 'locations/aesthetic-clinic-stevenage',
        element: <AestheticClinicStevenage />,
      },
      {
        path: 'locations/aesthetic-clinic-sawbridgeworth',
        element: <AestheticClinicSawbridgeworth />,
      },
      {
        path: 'locations/aesthetic-clinic-hertfordshire',
        element: <AestheticClinicHertfordshire />,
      },
      {
        path: 'locations/aesthetic-clinic-hoddesdon',
        element: <AestheticClinicHoddesdon />,
      },
      {
        path: 'locations/aesthetic-clinic-hertford',
        element: <AestheticClinicHertford />,
      },
      {
        path: 'locations/aesthetic-clinic-harlow',
        element: <AestheticClinicHarlow />,
      },
      {
        path: 'locations/aesthetic-clinic-cheshunt',
        element: <AestheticClinicCheshunt />,
      },
      {
        path: 'locations/aesthetic-clinic-broxbourne',
        element: <AestheticClinicBroxbourne />,
      },
      {
        path: 'locations/aesthetic-clinic-bishops-stortford',
        element: <AestheticClinicBishopsStortford />,
      },
      {
        path: 'locations/aesthetic-clinic-ware',
        element: <AestheticClinicWare />,
      },
      {
        path: 'locations/aesthetic-clinic-stanstead-abbotts',
        element: <AestheticClinicStansteadAbbotts />,
      },
      {
        path: 'locations/aesthetic-clinic-great-amwell',
        element: <AestheticClinicGreatAmwell />,
      },
      {
        path: 'locations/aesthetic-clinic-buntingford',
        element: <AestheticClinicBuntingford />,
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
