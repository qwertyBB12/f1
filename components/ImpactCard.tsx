import React from 'react';

export default function ImpactCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ opacity: 0.8 }}>{body}</p>
    </div>
  );
}
