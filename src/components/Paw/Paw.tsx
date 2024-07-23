import "./Paw.scss";

type Props = {
  style?: React.CSSProperties;
};

export const Paw: React.FC<Props> = ({ style }) => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.9893 39.0988C26.736 42.7654 21.8747 49.0481 21.8747 49.0481C21.8747 49.0481 17.2133 54.5521 11.1067 50.7494C5 46.9468 7.69867 36.7414 7.69867 36.7414C7.69867 36.7414 9.00534 32.6881 7.96 27.9788C6.90667 23.2721 7.30667 19.2161 7.30667 19.2161C7.30667 19.2161 7.96 13.3334 14.1307 12.1414C20.3013 10.9521 24.904 17.6348 25.5547 18.1628C26.2133 18.6854 28.416 22.1948 32.6427 24.7014C36.872 27.2081 39.416 34.2588 31.9893 39.0988ZM35.776 53.8668C34.5573 53.8668 29.3947 54.3761 29.2907 49.7281C29.1893 45.0801 32.432 44.8854 34.7573 44.8854C37.192 44.8854 40.6373 45.3841 40.6373 49.1254C40.6373 52.8588 36.9867 53.8668 35.7733 53.8668M43.1787 39.3894C43.584 36.2428 46.4373 35.5308 49.2933 35.8348C51.6267 36.0881 55.2107 38.8801 54.696 41.1174C54.1893 43.3494 51.2293 45.3841 48.6853 44.9734C46.1333 44.5681 42.7707 42.5414 43.1787 39.3894ZM44.16 26.0134C44.16 23.7174 46.808 21.8534 50.08 21.8534C53.352 21.8534 56 23.7121 56 26.0108C56 28.3094 53.352 30.1708 50.08 30.1708C46.808 30.1708 44.16 28.3121 44.16 26.0108M31.984 15.8961C31.0107 11.3761 36.2427 9.69076 38.6907 10.1894C38.6907 10.1894 43.9893 10.7228 44.3173 14.3921C44.5707 17.3068 41.3813 19.4534 39.5573 19.6721C38.3733 19.8108 32.9573 20.4268 31.984 15.8961Z" fill="currentColor"/>
</svg>
  );
};