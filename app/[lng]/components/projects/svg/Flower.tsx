interface FlowerProps {
  width: string;
  height: string;
  className: string;
}

function Flower({ width, height, className }: FlowerProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 57 60`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask id="mask0_690_2348" maskUnits="userSpaceOnUse" x="0" y="0" width="57" height="60">
        <path d="M57 0H0V60H57V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_690_2348)">
        <path
          d="M20.394 4.90041C24.0359 -1.63347 33.0101 -1.63347 36.6518 4.90041L36.7841 5.13771C38.4644 8.15199 41.5271 10.0134 44.847 10.0379L45.1087 10.0398C52.3052 10.0928 56.7922 18.2737 53.2374 24.8606L53.1083 25.0998C51.4684 28.1386 51.4684 31.8615 53.1083 34.9002L53.2374 35.1393C56.7922 41.7264 52.3052 49.9071 45.1087 49.9602L44.847 49.962C41.5271 49.9866 38.4644 51.8481 36.7841 54.8622L36.6518 55.0995C33.0101 61.6335 24.0359 61.6335 20.394 55.0995L20.2617 54.8622C18.5816 51.8481 15.5187 49.9866 12.1988 49.962L11.9374 49.9602C4.74086 49.9071 0.253811 41.7264 3.80842 35.1393L3.93753 34.9002C5.57739 31.8615 5.57739 28.1386 3.93753 25.0998L3.80842 24.8606C0.253811 18.2737 4.74086 10.0928 11.9374 10.0398L12.1988 10.0379C15.5188 10.0134 18.5816 8.15199 20.2617 5.13771L20.394 4.90041Z"
          fill={'currentColor'}
        />
      </g>
    </svg>
  );
}

export default Flower;
