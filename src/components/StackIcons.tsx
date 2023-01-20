import { StackIconProps } from '../types/components/TStackIcon';

const StackIcons = ({ icon }: StackIconProps) => {
  return <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} title={icon} />;
};

export default StackIcons;
