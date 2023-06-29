export const selectStyles = (selectedOption, optionValue) => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'none',
    border: 'none',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '-0.28px',
    cursor: 'pointer',
    boxShadow: 'none',
  }),

  valueContainer: provided => ({
    ...provided,
    padding: '0',
  }),

  placeholder: provided => ({
    ...provided,
    margin: '0',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    padding: '20px',
    color: 'rgba(255, 255, 255, 0.5)',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
  }),

  menu: (provided, state) => ({
    ...provided,
    padding: '18px 40px 18px 18px',
    fontSize: '14px',
    letterSspacing: '-0.28px',
    borderRadius: '8px',

    border:
      optionValue === 'light' || optionValue === 'dark'
        ? '1px solid #BEDBB0'
        : '1px solid #ECEDFD',
    backgroundColor:
      optionValue === 'light' || optionValue === 'violet' ? '#fff' : '#151515',
    boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.10)',
  }),

  menuList: (provided, state) => ({
    ...provided,
    '& > div': {
      padding: '0',
      backgroundColor:
        optionValue === 'light' || optionValue === 'violet'
          ? '#fff'
          : '#151515',

      color: state.isSelected
        ? '#BEDBB0'
        : optionValue === 'light' || optionValue === 'violet'
        ? '#151515'
        : 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
    },
    '& > div:not(:last-child)': {
      marginBottom: '4px',
    },
    '& > div:hover': {
      color:
        optionValue === 'light' || optionValue === 'dark'
          ? '#BEDBB0'
          : '#5255BC',
      cursor: 'pointer',
    },
  }),

  menuPortal: provided => ({
    ...provided,
    padding: '18px',
    backgroundColor: 'blue',
  }),
});
