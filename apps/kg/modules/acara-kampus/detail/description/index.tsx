import { FC, ReactElement } from 'react';
import RelatedEvent from '../../related-event';

type TDescription = {
  content: string;
};

export const Description: FC<TDescription> = ({ content }): ReactElement => {
  return (
    <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
      <section className="col-span-3 xl:col-span-2">
        <h1 className="mb-5 text-lg text-neutral-900">{content}</h1>
        <div className="text-sm text-neutral-600 ">
          <p className="mb-2"></p>
        </div>
      </section>
      <RelatedEvent />
    </div>
  );
};
