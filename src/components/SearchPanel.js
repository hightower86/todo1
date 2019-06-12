import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '20px'
  };
  return (
    <row className='d-flex mb-3'>
      <input 
        className='input-group-text'
        placeholder={searchText}
        style={searchStyle}/>
        <div class="btn-group btn-group-toggle ml-1" data-toggle="buttons">
          <label class="btn btn-info active">
            <input type="radio" name="options" id="option1" autocomplete="off" checked/> Active
          </label>
          <label class="btn btn-outline-secondary">
            <input type="radio" name="options" id="option2" autocomplete="off"/> Radio
          </label>
          <label class="btn btn-outline-secondary">
            <input type="radio" name="options" id="option3" autocomplete="off"/> Radio
          </label>
        </div>
    </row>
  
  )
}

export default SearchPanel;