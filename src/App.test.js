import { calcRepoTotal, calcLangPercentages, calcLangTotals, sortLanguagePercentages }  from './utilities';

describe('github dashboard', () => {
  const repo = {
    HTML: 300, 
    CSS: 200, 
    JavaScript: 500
  };

  it('should calculate the sum of all languages for each repo', () => {
    const expectedResult = 1000;

    const repoTotal = calcRepoTotal(repo);

    expect(repoTotal).toEqual(expectedResult);
  });

  it('should calculate the percentages of each language for each repo', () => {
    const repoWithTotal = {
      ...repo, 
      total: 1000 
    };

    const expectedResult = {
      HTML: 30,
      CSS: 20,
      JavaScript: 50
    };

    const result = calcLangPercentages(repoWithTotal);

    expect(result).toEqual(expectedResult);
  });

  it('should calculate the percentages of each language for each repo, and round the output', () => {
    const repoWithTotal = {
      HTML: 420, 
      CSS: 250, 
      JavaScript: 700,
      total: 1370 
    };

    const expectedResult = {
      HTML: 31,
      CSS: 18,
      JavaScript: 51
    };

    const result = calcLangPercentages(repoWithTotal);

    expect(result).toEqual(expectedResult);
  });

  it('should calculate the totals for each language', () => {
    const prevRepo = {
      HTML: 700, 
      JavaScript: 500
    };
  
    const expectedResult = {
      HTML: 1000,
      CSS: 200,
      JavaScript: 1000
    };
  
    calcLangTotals(prevRepo, repo);
  
    expect(repo).toEqual(expectedResult);
  });

  it('should sort the languages by highest percentage', () => {
    const languagePercentages = {
      JavaScript: 200,
      TypeScript: 300, 
      Python: 100, 
      Shell: 500,
    };

    const result = sortLanguagePercentages(languagePercentages);
    // using keys since snapshots don't preserve object property order
    const resultKeys = Object.keys(result);
    const expectedResult = ['Shell', 'TypeScript', 'JavaScript', 'Python'];

    expect(resultKeys).toEqual(expectedResult);
    
    const languagePercentagesKeys = Object.keys(languagePercentages);

    expect(resultKeys).not.toEqual(languagePercentagesKeys);
  })
});

