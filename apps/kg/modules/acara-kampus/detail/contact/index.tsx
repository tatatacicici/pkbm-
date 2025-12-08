import { FC, ReactElement } from 'react';
import RelatedEvent from '../../related-event';
import { ContactCard } from './contact-card';

const Contact: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
      <div className="col-span-3 xl:col-span-2">
        <h1 className="text-neutral-900 text-lg mb-5">Hubungi Panitia</h1>
        <ContactCard />
      </div>
      <RelatedEvent />
    </div>
  );
};

export default Contact;
