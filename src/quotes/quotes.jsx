import React, { useEffect, useState, useCallback } from "react";
import {
  PageContainer,
  PipContainer,
  Pip,
  QuoteContainer,
  Word,
  SectionTitle
} from "./styled";
import { Categories, Perspective, lines } from "./enums";

export default function Quotes() {
  const [filters, setFilters] = useState(new Set());
  const [currentQuote, setCurrentQuote] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [quoteKey, setQuoteKey] = useState(0); // Forces re-render

  const toggleFilter = (val) => {
    setFilters((prev) => {
      const next = new Set(prev);
      next.has(val) ? next.delete(val) : next.add(val);
      return next;
    });
  };

  const getFilteredLines = () => {
    return lines.filter((line) =>
      Array.from(filters).every((f) => line.perspective === f || line.category.includes(f))
    );
  };

  const filteredLines = getFilteredLines();

  const getRandomQuote = useCallback(() => {
    if (filteredLines.length === 0) return null;
    return filteredLines[Math.floor(Math.random() * filteredLines.length)];
  }, [filteredLines]);

  useEffect(() => {
    const handleSpace = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        const quote = getRandomQuote();
        if (quote) {
          setHasStarted(true);
          setCurrentQuote(quote);
          setQuoteKey(prev => prev + 1); // Change key to reset animation
        }
      }
    };
    window.addEventListener("keydown", handleSpace);
    return () => window.removeEventListener("keydown", handleSpace);
  }, [getRandomQuote]);

  const getCategoryCount = (val) =>
    lines.filter((line) => line.category.includes(val)).length;

  const getPerspectiveCount = (val) =>
    lines.filter((line) => line.perspective === val).length;

  return (
    <PageContainer>
      {/* Perspective Selection */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <SectionTitle>Perspective</SectionTitle>
        <PipContainer>
          {Object.entries(Perspective).map(([key, val]) => (
            <Pip
              key={val}
              selected={filters.has(val)}
              onClick={() => toggleFilter(val)}
            >
              {val} ({getPerspectiveCount(val)})
            </Pip>
          ))}
        </PipContainer>
      </div>

      {/* Category Filters after first quote */}
      {false && (
        <>
          {Object.entries(Categories).map(([groupName, group]) => (
            <div key={groupName} style={{ textAlign: "center", marginBottom: "24px" }}>
              <SectionTitle>{groupName}</SectionTitle>
              <PipContainer>
                {Object.values(group).map((val) => (
                  <Pip
                    key={val}
                    selected={filters.has(val)}
                    onClick={() => toggleFilter(val)}
                  >
                    {val} ({getCategoryCount(val)})
                  </Pip>
                ))}
              </PipContainer>
            </div>
          ))}
        </>
      )}

      {/* Quote Display */}
      <QuoteContainer key={quoteKey}>
        {currentQuote ? (
          <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "600px",
            textAlign: "center"
          }}>
            {currentQuote.text.split(" ").map((word, idx) => (
              <Word key={idx} delay={idx * 0.1}>
                {word}&nbsp;
              </Word>
            ))}
          </div>
        ) : (
          <span style={{ opacity: 0.5 }}>Select a perspective and press [spacebar] to begin.</span>
        )}
      </QuoteContainer>
    </PageContainer>
  );
}
