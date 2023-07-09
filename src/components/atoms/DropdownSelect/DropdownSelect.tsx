import React from 'react';

// Packages
import { Select } from '@chakra-ui/react';

// Types
import { DropdownSelectType } from 'types/InputTypes';

function DropdownSelect(props: DropdownSelectType) {
    return (
        <Select
            variant={props.variant || 'flushed'}
            placeholder={props.placeholder || 'Please select'}
            onChange={props.onChange}
        >
            {props.options.map((option) => {
                return <option key={option.value}>{option.label}</option>;
            })}
        </Select>
    );
}

export default DropdownSelect;
