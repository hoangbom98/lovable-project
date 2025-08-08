
import React from "react";
import withMainLayout from "@/components/layout/withMainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Agreement to Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            By accessing and using UtilityHub, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Use License</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Permission is granted to temporarily use UtilityHub for personal and commercial use. 
            This is the grant of a license, not a transfer of title, and under this license you may:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Use all available tools for legitimate purposes</li>
            <li>Share links to our tools with others</li>
            <li>Use our tools in your workflow or business processes</li>
          </ul>
          
          <p className="text-muted-foreground mt-4">
            This license shall automatically terminate if you violate any of these restrictions 
            and may be terminated by us at any time.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prohibited Uses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            You may not use our tools for:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Any unlawful purpose or to solicit others to unlawful acts</li>
            <li>Violating any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>Infringing upon or violating our intellectual property rights or the intellectual property rights of others</li>
            <li>Harassing, abusing, insulting, harming, defaming, slandering, disparaging, intimidating, or discriminating</li>
            <li>Submitting false or misleading information</li>
            <li>Attempting to overload or crash our servers</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Service Availability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We strive to provide reliable service, but we cannot guarantee:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Uninterrupted access to our services</li>
            <li>Error-free operation of all tools</li>
            <li>Compatibility with all devices and browsers</li>
            <li>Permanent availability of any specific tool</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            We reserve the right to modify, suspend, or discontinue any part of our service 
            at any time without notice.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The information and tools on this website are provided on an "as is" basis. 
            UtilityHub makes no representations or warranties of any kind, express or implied, 
            about the completeness, accuracy, reliability, suitability, or availability of 
            the tools or information contained on the website.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            In no event shall UtilityHub or its suppliers be liable for any damages 
            (including, without limitation, damages for loss of data or profit, or due to 
            business interruption) arising out of the use or inability to use the tools 
            on UtilityHub, even if UtilityHub or a UtilityHub authorized representative 
            has been notified orally or in writing of the possibility of such damage.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accuracy of Materials</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The tools and information appearing on UtilityHub could include technical, 
            typographical, or photographic errors. UtilityHub does not warrant that any 
            of the materials on its website are accurate, complete, or current.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            UtilityHub has not reviewed all of the sites linked to our website and is not 
            responsible for the contents of any such linked site. The inclusion of any link 
            does not imply endorsement by UtilityHub of the site.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Modifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            UtilityHub may revise these terms of service at any time without notice. 
            By using this website, you are agreeing to be bound by the then current 
            version of these terms of service.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Governing Law</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            These terms and conditions are governed by and construed in accordance with 
            applicable laws and you irrevocably submit to the exclusive jurisdiction of 
            the courts in that state or location.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default withMainLayout(Terms);
