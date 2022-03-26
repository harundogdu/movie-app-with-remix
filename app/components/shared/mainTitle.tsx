function MainTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold dark:text-light my-4">{title}</h2>
  );
}

export default MainTitle;
