const StackIcons = ({ icon }: { icon: string }) => {
  return <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} title={icon} />;
};

export default StackIcons;
