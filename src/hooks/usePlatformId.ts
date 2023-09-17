import usePlatform from "./usePlatform";

const usePlatformId = (id?: number) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatformId;
