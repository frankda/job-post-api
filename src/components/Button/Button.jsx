import Image from 'next/image';
import { StyledButton, StartElement, EndElement } from './Button.styles';

function Button({
  className, children, href, startIcon, endIcon, ...props
}) {
  return (
    <StyledButton
      {...props}
      className={className}
      as={href?.length ? 'a' : 'button'}
      href={href}
    >
      {startIcon && (
      <StartElement>
        <Image src={startIcon} width={14} height={14} />
      </StartElement>
      )}
      {children}
      {endIcon && (
      <EndElement>
        <Image src={endIcon} width={14} height={14} />
      </EndElement>
      )}
    </StyledButton>
  );
}

export default Button;
