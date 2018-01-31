import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

const Button = (props: Props) => (
	<button className="Button" type="button" {...props} />
);

export default Button;
