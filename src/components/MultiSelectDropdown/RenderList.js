import React from 'react';

const RenderList = ({ value,
    options,
    toggle,
    onCheck,
    onSelect,
    selectedOptions,
    DeselectAll,
    SelectAll,
    isMulti = false,
    noItemsText }) => {
    const filteredOptions = options.filter(item =>
        item.label.toLowerCase().startsWith(value?.toLowerCase()));

    if (filteredOptions.length) {
        return (
            toggle && (
                <div className='render-list-container'>
                    <div className='render-list'><ul>
                        {
                            filteredOptions.map((item, index) =>
                                <li key={index}>
                                    {isMulti ?
                                        <div className={selectedOptions[item.label] ?
                                            'active' : ''}>
                                            <input type='checkbox'
                                                checked={selectedOptions[item.label]}
                                                onChange={onCheck} name={item.label}
                                            />
                                            <label htmlFor={item.label}>
                                                {item.label}
                                            </label>
                                        </div> :
                                        <div onClick={onSelect.bind(this, item.label)}
                                            className={selectedOptions[item.label] ?
                                                'no-multiple-label active' : 'no-multiple-label'}>
                                            {item.label}</div>

                                    }

                                </li>)
                        }
                    </ul>
                    </div>
                    {isMulti && <div className='flex'><div className='deselect-all' onClick={DeselectAll}>Deselect All</div>
                        <div className='select-all' onClick={SelectAll}>Select All</div></div>}
                </div>
            )
        )
    }
    return <div className='no-items'>{noItemsText}</div>




}
export default RenderList;  