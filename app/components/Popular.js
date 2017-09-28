var React = require('react');

class Popular extends React.Component {

  constructor () {
    super()
    this.state = {
      selectedLanguage: 'All'
    };

  }

  updateLanguage (lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    });
  }

  render () {
    var languages = [
      'All',
      'Javascript',
      'Ruby',
      'Java',
      'CSS',
      'Python'
    ];

    return (
      <ul className='languages'>
        {languages.map((lang) => {
          return (
            <li
              style={lang === this.state.selectedLanguage ? { color: '#d0021b'} : null }
              onClick={() => this.updateLanguage(lang)}
              key={lang}>
              {lang}
            </li>
          );
        })}
      </ul>
    )
  }

}

module.exports = Popular;
