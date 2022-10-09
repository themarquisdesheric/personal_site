export const calcLangTotals = (repoStats, totals) => {
  Object.keys(repoStats)
    .forEach(lang => {
      if (!totals[lang]) totals[lang] = 0;

      totals[lang] += repoStats[lang];
    });
};

export const calcRepoTotal = repoStats => 
  Object.keys(repoStats).reduce( (sum, lang) => 
    sum + repoStats[lang]   
    , 0);

export const calcLangPercentages = (obj) => {
  const { total } = obj;
  
  return Object.keys(obj)
    .reduce( (result, lang) => {
      if (lang === 'total') return result;

      result[lang] = Math.round(obj[lang] / total * 100);
      
      return result;
    }, {});
};

export const sortLanguagePercentages = (languagePercentages) => {
  // convert to array to sort
  const sortedLanguagePercentages = Object.entries(languagePercentages).sort(
    (a, b) =>
      b[1] - a[1]
  );

  return sortedLanguagePercentages.reduce((acc, [language, percentage]) => ({
    languages: [...acc.languages, language],
    numericalDataInDescendingOrder: [...acc.numericalDataInDescendingOrder, percentage]
    
  }), {
    languages: [],
    numericalDataInDescendingOrder: []
  })
};
