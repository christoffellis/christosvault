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
  const [quoteKey, setQuoteKey] = useState(0); // Forces re-render
  const [mode, setMode] = useState("list"); // 'list' or 'impact'

  const toggleFilter = (val) => {
    setFilters((prev) => {
      const next = new Set(prev);
      next.has(val) ? next.delete(val) : next.add(val);
      return next;
    });
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "list" ? "impact" : "list"));
    setCurrentQuote(null); // Reset quote when switching modes
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
    if (mode === "impact") {
      const handleSpace = (e) => {
        if (e.code === "Space") {
          e.preventDefault();
          const quote = getRandomQuote();
          if (quote) {
            setCurrentQuote(quote);
            setQuoteKey((prev) => prev + 1);
          }
        }
      };
      window.addEventListener("keydown", handleSpace);
      return () => window.removeEventListener("keydown", handleSpace);
    }
  }, [mode, getRandomQuote]);

  const getCategoryCount = (val) =>
    lines.filter((line) => line.category.includes(val)).length;

  const getPerspectiveCount = (val) =>
    lines.filter((line) => line.perspective === val).length;

  return (
    <PageContainer
      mode={mode}
    >
      <div style={{ textAlign: "center", margin: "20px 0" }}>
  <div
    onClick={toggleMode}
    style={{
      width: "60px",
      height: "30px",
      borderRadius: "999px",
      backgroundColor: mode === "list" ? "#4cd96444" : "#007aff44",
      position: "relative",
      cursor: "pointer",
      transition: "background-color 0.3s ease"
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "2px",
        left: mode === "list" ? "2px" : "32px",
        width: "26px",
        height: "26px",
        borderRadius: "50%",
        backgroundColor: "white",
        transition: "left 0.25s ease"
      }}
    />
  </div>
  <div style={{ marginTop: "6px", color: "#ccc", fontSize: "0.8rem" }}>
    {mode === "list" ? "List" : "Impact"}
  </div>
</div>



      {/* Filters */}
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

      {/* Category Filters */}
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
      {mode === "impact" ? (
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
            <span style={{ opacity: 0.5 }}>Press [spacebar] to reveal a quote.</span>
          )}
        </QuoteContainer>
      ) : (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
          {filteredLines.length ? (
            filteredLines.map((quote, idx) => (
              <div
                key={idx}
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontSize: "1.3rem",
                  lineHeight: "1.6"
                }}
              >
                <div style={{ marginBottom: "10px", fontSize: "1.5rem" }}>
                  “{quote.text}”
                </div>

                <PipContainer style={{ justifyContent: "flex-start", flexWrap: "wrap" }}>
                  {quote.perspective && (
                    <Pip
                      onClick={() => toggleFilter(quote.perspective)}
                      selected={filters.has(quote.perspective)}
                      color='#555555'
                    >
                      {quote.perspective}
                    </Pip>
                  )}
                  {quote.category &&
                    quote.category.map((cat, i) => (
                      (cat && <Pip
                        onClick={() => toggleFilter(cat)}
                        key={`${cat.name}-${i}`}
                        selected={filters.has(cat)}
                        color={`${cat.color}`}
                        style={{
                          color: "#fff",
                          borderColor: "transparent"
                        }}
                      >
                        {cat.name}
                      </Pip>
                    )))}
                </PipContainer>
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", opacity: 0.5, color: "white" }}>
              No quotes match the current filters.
            </div>
          )}
        </div>

      )}
    </PageContainer>
  );
}
