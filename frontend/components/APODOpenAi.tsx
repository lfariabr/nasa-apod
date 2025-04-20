import { useState } from "react";
import { APOD } from "../hooks/useApod";

interface APODOpenAiProps {
  apod: APOD;
}

export default function APODOpenAi({ apod }: APODOpenAiProps) {
  const [funFacts, setFunFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getFunFacts = async () => {
    setLoading(true);
    setError(null);

    try {
        const response = await fetch("http://localhost:8000/enlighten-me", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: apod.explanation,
                title: apod.title
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch fun facts: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Parse the returned JSON string into an array
        try {
            const parsedFacts = JSON.parse(data.fun_facts);
            setFunFacts(parsedFacts);
        } catch (parseError) {
            // If parsing fails, treat the response as plain text
            setFunFacts([data.fun_facts]);
        }
        } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
        setLoading(false);
        }
    };

    return (
        <div style={{ margin: "2rem 0" }}>
            {/* Enlighten Me Button */}
            <div>
                <button 
                onClick={getFunFacts}
                disabled={loading}
                style={{
                backgroundColor: '#6200EA',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.3s'
            }}
            >
            <span role="img" aria-label="lightning">⚡</span> 
            {loading ? 'ENLIGHTENING...' : 'ENLIGHTEN ME'}
            </button>
            </div>
        
            {/* Error Message */}
            {error && (
            <div style={{ color: 'red', margin: '1rem 0' }}>
            Error: {error}
            </div>
            )}
        
            {/* Fun Facts Display */}
            {funFacts.length > 0 && (
            <div style={{ 
            margin: '1rem 0', 
            backgroundColor: '#333333', 
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #add8e6',
            textAlign: 'left',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#ffffff'
            }}>
            <h3 style={{ color: '#6200EA', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span role="img" aria-label="lightning">⚡</span> 
                Fun Facts About {apod.title}
            </h3>
            <ul style={{ paddingLeft: '20px' }}>
                {funFacts.map((fact, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>{fact}</li>
                ))}
            </ul>
            </div>
            )}
        </div>
    );
}
