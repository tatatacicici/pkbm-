import { ArticleModule } from '../../modules/article/getarticle';
import BaseLayout from '../../modules/base/BaseLayout';

export default function SekilasIlmuPage() {
  // const router = useRouter();

  return (
    <BaseLayout>
      <ArticleModule />
    </BaseLayout>
  );
}
