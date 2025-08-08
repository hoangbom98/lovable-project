
import React from "react";
import withMainLayout from "@/components/layout/withMainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Our Commitment to Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            At UtilityHub, we are committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, and safeguard your information when you use our website.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <p className="text-muted-foreground">
            We do not collect, store, or process any personal information. Our tools work 
            entirely in your browser without requiring registration or personal data.
          </p>
          
          <h3 className="text-lg font-semibold">Usage Data</h3>
          <p className="text-muted-foreground">
            We may collect anonymous usage statistics to improve our services, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Pages visited and tools used</li>
            <li>Browser type and version</li>
            <li>Device type and screen resolution</li>
            <li>General geographic location (country level)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How We Process Your Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            All data processing for our tools happens locally in your browser. This means:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Your files and text never leave your device</li>
            <li>We cannot access or view your data</li>
            <li>Processing is instant and secure</li>
            <li>No data is transmitted to our servers</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cookies and Tracking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We use minimal cookies for essential functionality:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Theme preferences (dark/light mode)</li>
            <li>Basic analytics to improve our services</li>
          </ul>
          <p className="text-muted-foreground">
            We do not use tracking cookies or third-party advertising networks.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Third-Party Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We may use third-party services for:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Website hosting and content delivery</li>
            <li>Anonymous usage analytics</li>
            <li>Performance monitoring</li>
          </ul>
          <p className="text-muted-foreground">
            These services do not have access to your personal data or files processed through our tools.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Since we don't collect personal information, there's no personal data to access, 
            modify, or delete. You can clear your browser's local storage at any time to 
            remove theme preferences.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Changes to This Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Any changes will be posted 
            on this page with an updated revision date.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us through 
            our Contact page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default withMainLayout(Privacy);
