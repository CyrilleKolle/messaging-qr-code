import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Route from './Route';
import { AuthProvider } from './AuthProvider';

/**
 * Wrap all providers here
 */

export default function Providers() {
    return (
        <PaperProvider>
            <AuthProvider>
                <Route/>
            </AuthProvider>
        </PaperProvider>
    );
}