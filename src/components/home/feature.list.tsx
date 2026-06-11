import React from 'react';

export type FeatureItem = {
  title?: string;
  description?: React.ReactNode;
  code?: string;
  right?: React.ReactNode;
  layout?: 'split' | 'full' | 'pair';
  columns?: { title: string; description: React.ReactNode }[];
};

// Most feature content lives in the "Fiber in Action" tab box and the
// "More in the Box" matrix; only full-width showcases remain here.
export const features: FeatureItem[] = [
  {
    title: 'Extreme Performance',
    layout: 'full',
    description: (
      <>
        <div>
          Since Fiber is built on top of Fasthttp, your apps will enjoy unmatching performance! Don't believe us? Here's a benchmark that proves how Fiber shines compared to other frameworks:
        </div><br/>
        <img
          src="/img/benchmark-pipeline.png"
          alt="Benchmark graph"
        />
      </>
    ),
  },
];
