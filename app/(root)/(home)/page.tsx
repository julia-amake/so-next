import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  QuestionsFilter,
  QuestionsSearch,
} from '@/components/features/QuestionsSearch/ui';

const Home = () => {
  return (
    <section className="flex h-full flex-col">
      <div className="mb-8 flex w-full flex-wrap justify-between gap-4 max-sm:flex-col-reverse sm:items-center">
        <h1 className="h1-bold max-sm:w-full">All Questions</h1>
        <Button asChild type={undefined}>
          <Link
            className="primary-gradient paragraph-medium ml-auto min-h-[46px] px-7 py-3 text-light-900"
            href="/ask-question"
          >
            Ask a Question
          </Link>
        </Button>
      </div>
      <div className="mb-10 flex gap-7 max-sm:flex-col sm:items-stretch md:flex-col">
        <QuestionsSearch />
        <QuestionsFilter />
      </div>
    </section>
  );
};

export default Home;
