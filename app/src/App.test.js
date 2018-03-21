describe('github dashboard', () => {
  const repo = {
    HTML: 300, 
    CSS: 200, 
    JavaScript: 500
  };

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
});

