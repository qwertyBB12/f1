import { registerComponent } from '@plasmicapp/host';
import React from 'react';

/** Example: register a custom code component you can use inside Plasmic Studio */
export function ImpactCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="card">
      <h3 style={{marginTop:0}}>{title}</h3>
      <p style={{opacity:.8}}>{body}</p>
    </div>
  );
}

registerComponent(ImpactCard, {
  name: 'ImpactCard',
  props: {
    title: { type: 'string', defaultValue: 'Legacy Project' },
    body: { type: 'string', defaultValue: 'Design the future with measurable impact.' }
  }
});

export default function PlasmicHost() {
  return <div />; // Plasmic will read registrations.
}
