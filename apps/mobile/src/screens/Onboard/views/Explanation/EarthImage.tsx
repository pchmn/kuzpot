import { useAppTheme } from '@kuzpot/react-native';
import Svg, { Circle, Defs, Ellipse, G, Path, Rect, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const EarthImage = ({ height = 250, width = 250, ...props }: SvgProps) => {
  const theme = useAppTheme();
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 250 250" {...props}>
      <Circle
        cx={125}
        cy={125}
        transform="rotate(179.469 125 125)"
        fill={theme.colors.secondaryContainer}
        r={123.858}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.203 42.965C12.623 65.099.852 94.273 1.146 126.149c.008.831.024 1.661.048 2.488 1.071.378 2.21.75 3.397 1.136 5.49 1.79 11.996 3.911 17.504 8.552 4.96 4.225 9.11 10.472 13.183 16.601 4.714 7.094 9.322 14.029 14.958 17.485 10.602 6.342 24.97.694 30.42-11.296 2.376-5.177 3.116-11.517 3.88-18.048 1.018-8.718 2.076-17.775 7.118-24.856 4.563-6.408 12.388-11.199 20.058-15.894 7.155-4.38 14.176-8.678 18.288-14.13 8.522-11.196 4.558-27.347-4.459-39.436-9.116-11.989-23.186-19.916-37.157-17.934-6.857.917-13.668 4.165-20.385 7.368-7.066 3.37-14.028 6.69-20.835 7.198-5.115.378-10.128-.807-14.962-2.416ZM194.862 22.712c32.168 22.013 53.458 58.82 53.986 100.719l-.241.03c-7.55 1.064-15.444 6.864-23.281 12.624-6.767 4.973-13.493 9.915-19.92 11.752-13.773 4.062-26.258-6.342-25.069-19.421.613-6.276 4.35-13.203 8.225-20.386 4.262-7.901 8.69-16.111 9.313-24.104.674-8.649-3.108-17.107-6.692-25.12-2.74-6.126-5.363-11.993-5.793-17.487-.621-7.955 3.319-15.21 9.472-18.607ZM227.003 195.277c-19.073 27.632-49.095 47.158-83.863 52.26 1.161-3.496 2.684-6.656 4.121-9.638 2.981-6.183 5.592-11.6 3.833-17.66-1.282-4.462-4.86-9.266-8.71-14.432-4.185-5.618-8.69-11.664-10.909-18.168-4.261-12.584-.099-26.852 9.314-24.969 6.144 1.242 14.531 9.512 22.372 17.244 4.045 3.99 7.945 7.836 11.317 10.5 8.927 6.982 14.149 5.923 21.572 4.417.899-.182 1.83-.371 2.804-.553 8.318-1.554 19.671-2.517 28.149.999Z"
        fill={theme.dark ? theme.colors.onSecondary : theme.colors.onSecondary + 'B3'}
      />
      <Ellipse cx={149.443} cy={176.926} rx={6.443} ry={2.926} fill="#000" fillOpacity={0.1} />
      <Path
        d="M173.538 158.279c-3.271 13.035-18.746 17.48-23.161 18.495a2.359 2.359 0 0 1-2.1-.529c-3.411-2.983-14.949-14.226-11.677-27.261 2.522-10.046 12.835-16.109 23.035-13.543 10.2 2.567 16.425 12.792 13.903 22.838Z"
        fill={theme.colors.primary}
      />
      <Path
        d="M152.599 161.272c4.248 1.507 8.904-.661 10.4-4.841 1.497-4.18-.734-8.79-4.982-10.296-4.247-1.507-8.904.661-10.4 4.841-1.496 4.18.734 8.79 4.982 10.296Z"
        fill="#fff"
      />
      <Ellipse cx={104.443} cy={59.926} rx={6.443} ry={2.926} fill="#000" fillOpacity={0.1} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.266 27.766a5 5 0 0 0-3.851 5.93l3.388 15.94.007.032 1.885 8.868c.352 1.658 2.477 2.154 3.527.823l5.459-6.923 24.195-5.143a5 5 0 0 0 3.851-5.93l-3.388-15.94a5 5 0 0 0-5.93-3.851l-29.143 6.194Z"
        fill={theme.colors.tertiary}
      />
      <Rect
        x={105.202}
        y={33.789}
        width={24.78}
        height={4.171}
        rx={2.086}
        transform="rotate(-12 105.202 33.79)"
        fill={theme.colors.tertiary}
      />
      <Rect
        x={105.202}
        y={33.789}
        width={24.78}
        height={4.171}
        rx={2.086}
        transform="rotate(-12 105.202 33.79)"
        fill={theme.colors.tertiary}
      />
      <Rect
        x={105.202}
        y={33.789}
        width={24.78}
        height={4.171}
        rx={2.086}
        transform="rotate(-12 105.202 33.79)"
        fill="#fff"
      />
      <Rect
        x={107.114}
        y={42.592}
        width={16.48}
        height={4.03}
        rx={2.015}
        transform="rotate(-12 107.114 42.592)"
        fill="#fff"
      />
      <Rect
        x={107.114}
        y={42.592}
        width={16.48}
        height={4.03}
        rx={2.015}
        transform="rotate(-12 107.114 42.592)"
        fill={theme.colors.tertiary}
      />
      <Rect
        x={107.114}
        y={42.592}
        width={16.48}
        height={4.03}
        rx={2.015}
        transform="rotate(-12 107.114 42.592)"
        fill="#fff"
      />
      <G filter="url(#a)">
        <Path
          d="M101.563 67.379v0c-13.323 39.928 2.154 84.13 37.158 107.508v0"
          stroke={theme.colors.onSurfaceVariant}
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray="8 8"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default EarthImage;
