import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { IKind } from '../../interfaces';


interface Props {
    selectedSize?: IKind;
    sizes: IKind[];

    // Method
    onSelectedSize: (size: IKind ) => void;
}


export const SizeSelector: FC<Props> = ({selectedSize, sizes, onSelectedSize }) => {
  return (
    <Box>
        {
            sizes.map( size => (
                <p     //Button     inhabilitado por innecesario
                    key={ size }
                    // size='small'
                    color={ selectedSize === size ? 'success' : 'info' }
                    // onClick={ () => onSelectedSize( size ) }
                >
                    {/* { size } */}
                </p>
            ))
        }
    </Box>
  )
}
