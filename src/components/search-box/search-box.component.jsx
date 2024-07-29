import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div className={`search-container`}>
      <input
        className={`search-box form-control border-0 bg-dark`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
