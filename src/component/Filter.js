import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  const options = [
    'affenpinscher',
    'african',
    'airedale',
    'akita',
    'appenzeller',
    'australian',
    'basenji',
    'beagle',
    'bluetick',
    'borzoi',
    'bouvier',
    'boxer',
    'brabancon',
    'briard',
    'buhund',
    'bulldog',
    'bullterrier',
    'cairn',
    'cattledog',
    'chihuahua',
    'chow',
    'clumber',
    'cockapoo',
    'collie',
    'coonhound',
    'corgi',
    'cotondetulear',
    'dachshund',
    'dalmatian',
    'dane',
    'deerhound',
    'dhole',
    'dingo',
    'doberman',
    'elkhound',
    'entlebucher',
    'eskimo',
    'finnish',
    'frise',
    'germanshepherd',
    'greyhound',
    'groenendael',
    'havanese',
    'hound',
    'husky',
    'keeshond',
    'kelpie',
    'komondor',
    'kuvasz',
    'labrador',
    'leonberg',
    'lhasa',
    'malamute',
    'malinois',
    'maltese',
    'mastiff',
    'mexicanhairless',
    'mix',
    'mountain',
    'newfoundland',
    'otterhound',
    'ovcharka',
    'papillon',
    'pekinese',
    'pembroke',
    'pinscher',
    'pitbull',
    'pointer',
    'pomeranian',
    'poodle',
    'pug',
    'puggle',
    'pyrenees',
    'redbone',
    'retriever',
    'ridgeback',
    'rottweiler',
    'saluki',
    'samoyed',
    'schipperke',
    'schnauzer',
    'setter',
    'sheepdog',
    'shiba',
    'shihtzu',
    'spaniel',
    'springer',
    'stbernard',
    'terrier',
    'vizsla',
    'waterdog',
    'weimaraner',
    'whippet',
    'wolfhound',
  ];

  return (
    <div className="select">
      <select onChange={onChange}>
        <option className="option-sel" value="All">Select a Breed</option>
        {options.map(el => (
          <option className="option-sel" key={el} value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
