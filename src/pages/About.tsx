
import React from "react";
import withMainLayout from "@/components/layout/withMainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, Shield, Gamepad2, Lock, CheckSquare, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          {language === 'vi' ? 'Giới Thiệu Casino Dev Mastermind' : 'About Casino Dev Mastermind'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {language === 'vi' 
            ? 'Nền tảng Quản lý Tri thức và Quy trình chuyên dụng cho phát triển sản phẩm tài chính, cờ bạc và casino game online. Cung cấp hơn 120+ công cụ miễn phí để chuẩn hóa quy trình, tăng cường bảo mật và đảm bảo tuân thủ pháp lý.'
            : 'Knowledge & Process Management Platform specialized for finance, gambling, and online casino game development. Providing 120+ free tools to standardize processes, enhance security, and ensure legal compliance.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {language === 'vi' ? 'Sứ Mệnh' : 'Our Mission'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {language === 'vi' 
                ? 'Cung cấp một công cụ "tất cả trong một" giúp chuẩn hóa quy trình phát triển casino, tăng cường bảo mật, đảm bảo tuân thủ pháp lý và quản lý tài nguyên dự án một cách hiệu quả. Phục vụ Lập trình viên, Tech Leads và Project Managers.'
                : 'To provide an "all-in-one" tool that helps standardize casino development processes, enhance security, ensure legal compliance, and efficiently manage project resources. Serving Developers, Tech Leads, and Project Managers.'
              }
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-primary" />
              {language === 'vi' ? 'Chuyên Môn Casino' : 'Casino Expertise'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {language === 'vi' 
                ? 'Chuyên dụng cho lĩnh vực tài chính, cờ bạc và casino game online. Được thiết kế dựa trên kinh nghiệm thực tế trong việc phát triển các sản phẩm casino tuân thủ quy định quốc tế.'
                : 'Specialized for finance, gambling, and online casino game development. Designed based on real-world experience in developing casino products that comply with international regulations.'
              }
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              {language === 'vi' ? 'Bảo Mật Tối Đa' : 'Maximum Security'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {language === 'vi' 
                ? 'Hệ thống mã hóa AES-256 cho dữ liệu nhạy cảm, phân quyền RBAC, và ghi log toàn diện. Tất cả API keys, secrets được bảo vệ với các tiêu chuẩn bảo mật cao nhất trong ngành casino.'
                : 'AES-256 encryption for sensitive data, RBAC authorization, and comprehensive logging. All API keys and secrets are protected with the highest security standards in the casino industry.'
              }
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-primary" />
              {language === 'vi' ? 'Quy Trình Chuẩn' : 'Standardized Processes'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {language === 'vi' 
                ? 'Checklist bắt buộc với gating logic đảm bảo mọi dự án tuân thủ quy trình chuẩn. Wizard tích hợp API giúp kết nối với các nhà cung cấp sảnh game một cách an toàn và hiệu quả.'
                : 'Mandatory checklists with gating logic ensure all projects follow standard processes. API integration wizard helps connect with game hall providers safely and efficiently.'
              }
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Casino-specific features section */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {language === 'vi' ? 'Tính Năng Chuyên Dụng Casino' : 'Specialized Casino Features'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckSquare className="h-5 w-5 text-violet-600" />
                {language === 'vi' ? 'Quản Lý Dự Án' : 'Project Management'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'vi' 
                  ? 'Template checklist bắt buộc với phân giai đoạn (Pháp lý, Hạ tầng, Bảo mật) và logic gating'
                  : 'Mandatory checklist templates with phases (Legal, Infrastructure, Security) and gating logic'
                }
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Gamepad2 className="h-5 w-5 text-violet-600" />
                {language === 'vi' ? 'Wizard API' : 'API Wizard'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'vi' 
                  ? 'Hướng dẫn 4 bước: Chọn Sảnh → Chọn Game → Xem API → Đăng ký với code samples'
                  : '4-step guide: Select Hall → Choose Game → View API → Register with code samples'
                }
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lock className="h-5 w-5 text-violet-600" />
                {language === 'vi' ? 'Kho Mã Hóa' : 'Encrypted Vault'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'vi' 
                  ? 'Lưu trữ an toàn API keys, merchant IDs với mã hóa AES-256 và logging truy cập'
                  : 'Secure storage of API keys, merchant IDs with AES-256 encryption and access logging'
                }
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="h-5 w-5 text-violet-600" />
                {language === 'vi' ? 'Thư Viện Tài Liệu' : 'Document Library'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'vi' 
                  ? 'Cây thư mục điều hướng với tài liệu kỹ thuật, API docs và quy trình chuẩn'
                  : 'Navigation tree with technical documents, API docs and standard processes'
                }
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-violet-600" />
                {language === 'vi' ? 'Tuân Thủ Pháp Lý' : 'Legal Compliance'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'vi' 
                  ? 'Kiểm tra tuân thủ tự động, quản lý giấy phép gaming và đánh giá rủi ro bảo mật'
                  : 'Automated compliance checking, gaming license management and security risk assessment'
                }
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-violet-600" />
                {language === 'vi' ? 'Phân Quyền RBAC' : 'RBAC Authorization'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'vi' 
                  ? '3 vai trò: Admin (toàn quyền), PM (quản lý dự án), Developer (thực thi)'
                  : '3 roles: Admin (full access), PM (project management), Developer (execution)'
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {language === 'vi' ? 'Kiến Trúc Hệ Thống' : 'System Architecture'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              {language === 'vi' ? '🎨 Frontend (MERN)' : '🎨 Frontend (MERN)'}
            </h3>
            <p className="text-muted-foreground text-sm">
              {language === 'vi' 
                ? 'React.js, Redux Toolkit, Material-UI, Axios. Giao diện responsive với thiết kế chuyên nghiệp.'
                : 'React.js, Redux Toolkit, Material-UI, Axios. Responsive interface with professional design.'
              }
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              {language === 'vi' ? '⚙️ Backend (Node.js)' : '⚙️ Backend (Node.js)'}
            </h3>
            <p className="text-muted-foreground text-sm">
              {language === 'vi' 
                ? 'Express.js, MongoDB, JWT Authentication, bcrypt, AES-256 encryption với middleware bảo mật.'
                : 'Express.js, MongoDB, JWT Authentication, bcrypt, AES-256 encryption with security middleware.'
              }
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              {language === 'vi' ? '🐳 Triển Khai (Docker)' : '🐳 Deployment (Docker)'}
            </h3>
            <p className="text-muted-foreground text-sm">
              {language === 'vi' 
                ? 'Docker Compose, Nginx Reverse Proxy, SSL Let\'s Encrypt, VPS deployment với backup tự động.'
                : 'Docker Compose, Nginx Reverse Proxy, SSL Let\'s Encrypt, VPS deployment with automatic backup.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {language === 'vi' ? 'Lộ Trình Phát Triển' : 'Development Roadmap'}
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-green-700 dark:text-green-400">
              {language === 'vi' ? '✅ Giai đoạn 1: Nền tảng & Xác thực (Hoàn thành)' : '✅ Phase 1: Foundation & Authentication (Completed)'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'vi' 
                ? 'Kiến trúc cơ bản, hệ thống đăng nhập, Docker setup'
                : 'Basic architecture, login system, Docker setup'
              }
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-blue-700 dark:text-blue-400">
              {language === 'vi' ? '🔄 Giai đoạn 2: MVP - Checklist & Quản lý Dự án (Đang phát triển)' : '🔄 Phase 2: MVP - Checklist & Project Management (In Progress)'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'vi' 
                ? 'CRUD Project, Checklist với gating logic, Cây thư mục'
                : 'Project CRUD, Checklist with gating logic, Navigation tree'
              }
            </p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="font-semibold text-amber-700 dark:text-amber-400">
              {language === 'vi' ? '⏳ Giai đoạn 3: Thư viện & Wizard API (Kế hoạch)' : '⏳ Phase 3: Library & API Wizard (Planned)'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'vi' 
                ? 'Wizard tích hợp API sảnh game, CRUD tài liệu'
                : 'Game hall API integration wizard, Document CRUD'
              }
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-purple-700 dark:text-purple-400">
              {language === 'vi' ? '🔮 Giai đoạn 4: Bảo mật & Hoàn thiện (Tương lai)' : '🔮 Phase 4: Security & Finalization (Future)'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'vi' 
                ? 'Hoàn thiện Vault mã hóa, RBAC, Tối ưu hiệu năng'
                : 'Complete encrypted Vault, RBAC, Performance optimization'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withMainLayout(About);
