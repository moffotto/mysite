import { ReactElement, ReactNode } from 'react';

type ExampleComponentProps = {
  className?: string;
  id?: string;
  children?: ReactNode;
};

const ExampleComponent = ({ className, id, children }: ExampleComponentProps): ReactElement => {
  return (
    <section className={`${className} exampleComponent-container`} id={id ?? undefined}>
      {children && <div className={'exampleComponent-innerText'}>{children}</div>}
    </section>
  );
};

export default ExampleComponent;
