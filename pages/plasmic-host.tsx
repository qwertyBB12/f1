import { registerComponent } from '@plasmicapp/host';
import ImpactCard from '../components/ImpactCard';

/**
 * Register custom code components for Plasmic Studio.
 * The required 'importPath' must match how the component would be imported in your app.
 */
registerComponent(ImpactCard, {
  name: 'ImpactCard',
  importPath: '../components/ImpactCard',
  props: {
    title: { type: 'string', defaultValue: 'Legacy Project' },
    body: { type: 'string', defaultValue: 'Design the future with measurable impact.' },
  },
});

export default function PlasmicHost() {
  return <div />; // Plasmic reads registrations from this page
}
