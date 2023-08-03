'use client';

import useConversation from '@/app/hooks/useConversation';
import useRoutes from '@/app/hooks/userRoutes';
import MobileItem from './MobileItem';

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    null;
  }

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {routes.map((route) => (
        <MobileItem
          key={route.label}
          href={route.href}
          label={route.label}
          active={route.active}
          onClick={route.onClick}
          icon={route.icon}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
